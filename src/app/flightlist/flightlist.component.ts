import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.scss']
})
export class FlightlistComponent implements OnInit {

  flights: Array<any> = [];
  flightService: FlightService;

  constructor(flightService: FlightService) {
    this.flights = flightService.getFlights();
    this.flightService = flightService;
  }

  ngOnInit() {
  }

  deleteFlight(flightNum) {
    this.flightService.removeFlight(flightNum);
    this.flights = this.flightService.getFlights();
  }

}
