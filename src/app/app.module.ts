import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { InfoTextComponent } from './info-text/info-text.component';
import { NavComponent } from './nav/nav.component';

// const routes: Route[] = [
//   {path: 'first', component: FirstComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    InfoTextComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
