import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = false;

  constructor(public siteService: SiteService) { }

  ngOnInit() {
  }

}
