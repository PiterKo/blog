import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  jumbotron: any;

  constructor(public siteService: SiteService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.jumbotron = this.siteService.jumbotron();
  }
}
