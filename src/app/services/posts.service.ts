import { Post } from "./../models/post.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  public getPosts(userId?: number): Observable<Post[]> {
    const endpoint = `posts`;
    let params = new HttpParams();

    userId ? (params = params.set("userId", userId.toString())) : null;

    return this.httpClient.get<Post[]>(`${API_URL}/${endpoint}`, { params });
  }

  public addPost(post: Post) {
    const endpoint = `posts`;
    return this.httpClient.post(`${API_URL}/${endpoint}`, post);
  }
}
