import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ToDo } from "../models/to-do.model";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class ToDosService {
  constructor(private httpClient: HttpClient) {}

  public getToDos(userId?: number): Observable<ToDo[]> {
    const endpoint = `todos`;
    let params = new HttpParams();

    userId ? (params = params.set("userId", userId.toString())) : null;

    return this.httpClient.get<ToDo[]>(`${API_URL}/${endpoint}`, { params });
  }

  public postToDo(toDo: ToDo): Observable<ToDo> {
    const endpoint = `todos`;
    return this.httpClient.post<ToDo>(`${API_URL}/${endpoint}`, toDo);
  }
}
