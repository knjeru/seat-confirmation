import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

        /* This data store represents a centralized location for sharing information on the currently selected seat in the cabin */

        private selectedSeatSource = new BehaviorSubject('');
        currentSelectedSeat$ = this.selectedSeatSource.asObservable();

        updateSelectedSeat(seatUuid: string) {
          this.selectedSeatSource.next(seatUuid);
        }
}
