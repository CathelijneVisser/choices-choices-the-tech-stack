 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: SecondComponent }
]

@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondModule { }
