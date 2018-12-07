import {Component, Input, OnInit} from '@angular/core';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  seatUuid: string;
  @Input() seatData: any;
  @Input() selectedSeatUuid: string;

  constructor(public dataStoreService: DataStoreService) { }

  ngOnInit() {
    // On component init, generate a unique ID for this seat
    this.seatUuid = `${this.seatData.seat}${this.seatData.row}`;
    console.log('what is my seat ID ', this.seatUuid);
  }

  getAvailablity() {
    let elClass = 'available';
    if (this.seatData.occupied) {
      elClass = 'occupied';
    } else if (this.seatUuid === this.selectedSeatUuid) {
      elClass = 'selected';
    }
    return elClass;
  }

  selectSeat() {
    this.dataStoreService.updateSelectedSeat(this.seatUuid);
  }

}
