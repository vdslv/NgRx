import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get(`${this.baseUrl}posts`);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.baseUrl}posts/${id}`);
  }

  getComments(id: number) {
    return this.http.get(`${this.baseUrl}posts/${id}/comments`);
  }
}
