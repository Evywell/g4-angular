import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { FlightaddComponent } from './flightadd/flightadd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FlightService} from './services/flight.service';

const appRoutes: Routes = [
  { path: 'flight-list', component: FlightlistComponent },
  { path: 'flight-add', component: FlightaddComponent },
  { path: '',
    redirectTo: '/flight-list',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FlightlistComponent,
    FlightdetailsComponent,
    FlightaddComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
