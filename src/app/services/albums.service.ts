import { Album } from "./../models/album.model";
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

  public getAlbums(): Observable<Album[]> {
    const endpoint = `albums/1/photos`;
    return this.httpClient.get<Album[]>(`${API_URL}/${endpoint}`);
  }
}
