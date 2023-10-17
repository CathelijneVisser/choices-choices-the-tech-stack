import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>Test<h1>
  <app-home></app-home>`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'OceanCleanup Dashboard';
}
