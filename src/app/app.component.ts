import { Component } from '@angular/core';
//import { HomeComponent }  from './home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html',
})
export class AppComponent {
  name = 'Angular';
  title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}
