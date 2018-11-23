import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  title = 'MyBlog';
  dateNow = Date.now();

  constructor() { }
}
