import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  title = 'MyBlog';
  dateNow = Date.now();

  constructor() { }

  jumbotron() {
    return {
      title: 'Hello, world!',
      // tslint:disable-next-line:max-line-length
      description: 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.'
    };
  }
}
