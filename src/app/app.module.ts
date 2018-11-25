import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap';
import { SiteService } from './services/site.service';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './_partial/post/post.component';
import { JumbotronComponent } from './_partial/jumbotron/jumbotron.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './_partial/menu/menu.component';
import { SocialComponent } from './_partial/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PostsComponent,
    PostComponent,
    JumbotronComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    SocialComponent
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
