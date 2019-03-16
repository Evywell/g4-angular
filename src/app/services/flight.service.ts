export class FlightService {

  flights: Array<any> = [
    {
      num: 'AF6',
      flightStart: '13h20',
      airportStart: 'Paris Charles de Gaulle',
      airportStartAbbreviation: 'CDG',
      flightEnd: '15h55',
      airportEnd: 'New York JFK',
      airportEndAbbreviation: 'JFK',
      emergency: false,
      passengers: 350
    },
    {
      num: 'CA934',
      flightStart: '19h30',
      airportStart: 'Paris Charles de Gaulle',
      airportStartAbbreviation: 'CDG',
      flightEnd: '12h35',
      airportEnd: 'Beijing Capital',
      airportEndAbbreviation: 'PEK',
      emergency: true,
      passengers: 800
    }
  ];

  newFlight(
    num: string,
    flightStart: string,
    airportStart: string,
    airportStartAbbreviation: string,
    flightEnd: string,
    airportEnd: string,
    airportEndAbbreviation: string,
    emergency: boolean,
    passengers: number
  ) {
    this.flights.push({
      num,
      flightStart,
      airportStart,
      airportStartAbbreviation,
      flightEnd,
      airportEnd,
      airportEndAbbreviation,
      emergency,
      passengers
    });
  }

  getFlights() {
    return this.flights;
  }

  removeFlight(flightNum: string) {
    this.flights = this.flights.filter((flight) => {
      return flight.num !== flightNum;
    });
  }
}
