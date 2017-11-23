import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// STATIC CONSTANTS
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
/*{
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- only for debugging
    ),
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
