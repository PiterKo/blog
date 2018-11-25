import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getUser(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
