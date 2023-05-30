import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Pranshu Singh Bisht</h1>
  <p>this is multiline using tilt</p>`,
  styleUrls: ['./app.component.css'],
  styles:[
    `h1{
      color: red
    }`
  ]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
