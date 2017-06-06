import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { LayoutComponent }  from './layout/layout.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: LayoutComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent}

];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
    ],
  declarations: [ 
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
