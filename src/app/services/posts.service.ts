import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<any> {
    const endpoint = `posts`;
    return this.httpClient.get<any>(`${API_URL}/${endpoint}`);
  }
}
