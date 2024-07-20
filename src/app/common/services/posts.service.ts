import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as endpoints from './posts.api';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getListPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiBase + endpoints.default.post);
  }

  public createPost(post: Post): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(
      environment.apiBase + endpoints.default.post,
      JSON.stringify(post)
    );
  }

  public updatePost(post: Post): Observable<{ id: number }> {
    return this.http.put<{ id: number }>(
      environment.apiBase + endpoints.default.post + '/' + post.id,
      JSON.stringify(post)
    );
  }

  public deletePost(post: Post): Observable<{ id: number }> {
    return this.http.delete<{ id: number }>(
      environment.apiBase + endpoints.default.post + '/' + post.id
    );
  }
}
