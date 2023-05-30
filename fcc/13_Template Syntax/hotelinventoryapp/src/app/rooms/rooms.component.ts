import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Taz Hotel';
  noOfRooms = 23;
  hideRooms: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  eventFunc(){
this.hideRooms = !this.hideRooms;
  }

}
