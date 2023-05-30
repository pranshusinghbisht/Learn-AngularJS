import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms : Room = {
    totalRooms : 20,
    availableRoooms: 10,
    bookedRooms: 5
  }

  constructor() { }

  ngOnInit() {
  }

}
