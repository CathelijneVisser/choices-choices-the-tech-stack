import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { InfoTextComponent } from './info-text/info-text.component';
import { NavComponent } from './nav/nav.component';
import { TrashRemovedTotalComponent } from './trash-removed-total/trash-removed-total.component';
import { TrashRemovedMonthComponent } from './trash-removed-month/trash-removed-month.component';
import { MapComponent } from './map/map.component';
import { SystemStatusComponent } from './system-status/system-status.component';

// const routes: Route[] = [
//   {path: 'first', component: FirstComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    InfoTextComponent,
    NavComponent,
    TrashRemovedTotalComponent,
    TrashRemovedMonthComponent,
    MapComponent,
    SystemStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//skMBPmqboEN37gPBo9jJEXtGEMqgYroutalXolQoOoxYqC7avh7HXQ6v5Nmy1l6MuSS0IiwDQU5nfjMR4q4a2T5q0f5Wd9ajpPRlgSHCjGtdVPaKSz5niReGaSnn6KujXP5QWAn7T3tZqOTtYRWbTy7Dqqw27rAqfbfbMHKuYvVwMBTvu3IL