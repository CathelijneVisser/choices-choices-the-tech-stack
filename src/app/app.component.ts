import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `<h1>Test<h1>`,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HomeComponent,
  ],
})
export class AppComponent {
  title = 'OceanCleanup Dashboard';
}
