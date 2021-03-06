import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

//import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';

import { GithubService } from './providers/github.service';
import { PostsService } from './providers/posts.service';

import { RepoFilterPipe } from './pipes/repo-filter.pipe';

// STATIC CONSTANTS
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Portfolio' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'posts',
    component: PostComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    RepoFilterPipe,
    ModalComponent,
    ModalFormComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    //AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MarkdownToHtmlModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- only for debugging
    ),
  ],
  providers: [
    GithubService,
    BsModalRef,
    PostsService,
    //AngularFireModule
  ],
  entryComponents: [
    ModalComponent,
    ModalFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
