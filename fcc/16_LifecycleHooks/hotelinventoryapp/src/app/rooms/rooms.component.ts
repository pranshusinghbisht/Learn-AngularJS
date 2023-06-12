import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  noOfRooms = 12;

  selectedRoom !: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')

    },

    {
      roomNumber:2,
      roomType: 'Premium Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')

    },

    {
      roomNumber:3,
      roomType: 'Pro Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')

    }
  ]


  roomlist : RoomList[] = [];

  constructor() { }


  ngOnInit() {

    this.roomlist = [
      {
        roomNumber:1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
  
      },
  
      {
        roomNumber:2,
        roomType: 'Premium Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 1500,
        photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
  
      },
  
      {
        roomNumber:3,
        roomType: 'Pro Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
  
      }
    ]

  }
  selectRoom(room: RoomList){
    // console.log(room);

    this.selectedRoom = room;
    
  }


  addRoom(){
    
    let room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.pexels.com/photos/20943/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')

    }

   this.roomlist.push(room);
   
    console.log(this.roomlist);
  }

}
