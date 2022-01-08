import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  constructor(private httpClient: HttpClient) {}

  public getAlbums(): Observable<any> {
    const endpoint = `albums`;
    return this.httpClient.get<any>(`${API_URL}/${endpoint}`);
  }
}
