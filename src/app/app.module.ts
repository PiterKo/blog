import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap';
import { SiteService } from './services/site.service';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
