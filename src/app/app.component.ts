import { Component } from '@angular/core';
import { HomeComponent }  from './home/home.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
