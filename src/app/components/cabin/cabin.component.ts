import { Component, OnInit } from '@angular/core';
import {SeatingService} from '../../services/seating.service';
import {Observable} from 'rxjs';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.component.html',
  styleUrls: ['./cabin.component.scss']
})
export class CabinComponent implements OnInit {

  rows$: Observable<any>;
  selectedSeatUuid: string;
  constructor(public seatingService: SeatingService, public dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.rows$ = this.seatingService.getSeatData();
    this.dataStoreService.currentSelectedSeat$.subscribe(seatUuid => {
      this.selectedSeatUuid = seatUuid;
    });
  }

}
