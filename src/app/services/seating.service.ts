import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeatingService {

  constructor(private http: HttpClient) { }

  getSeatData(): Observable<any[]> {
    // Returns a two dimensional array of seats grouped by row and sorted by seat
    return this.http.get('./assets/data/seats.json').pipe(map(res => {

      // Pulled method from here: https://stackoverflow.com/a/50207560
      // This method creates a two dimensional array grouped by row
      const groupedArrayOfRows = (<any[]>res).reduce((acc, curr) => {
        // Finding index in the array where the row matched
        const findIfRowExist = acc.findIndex(item => {
          return item.row === curr.row;
        });
        // Create new array for next set of seats in the same row
        if (findIfRowExist === -1) {
          const obj = {
            'row': curr.row,
            'seats': [curr]
          };
          acc.push(obj);
        } else {
          // Else push value if row exists
          acc[findIfRowExist].seats.push(curr);
        }
        return acc;

      }, []).sort((a, b) => a.row - b.row);

      // Finally we return a two dimensional array with each row sorted by seat
      return groupedArrayOfRows.map(x => {
        return x.seats.sort(function(a, b) {
          const seatA = a.seat.toLowerCase(), seatB = b.seat.toLowerCase();
          if (seatA < seatB) {
            return -1; // sort string ascending
          }
          if (seatA > seatB) {
            return 1;
          }
          return 0; // default return value (no sorting)
        });
      });
    }));
  }
}
