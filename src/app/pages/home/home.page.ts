import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cities = [
    { name: 'Mumbai', image: 'assets/images/mumbai.jpg', id: 1 },
    { name: 'Bhiwandi', image: 'assets/images/bhiwandi.jpg', id: 2 },
    { name: 'Hyderabad', image: 'assets/images/hyderabad.jpg', id: 3 },
    { name: 'Pune', image: 'assets/images/pune.jpg', id:4},
    { name: 'Thane', image: 'assets/images/thane.jpg', id:5},
    { name: 'Kalyan', image: 'assets/images/kalyan.jpg', id:6},
  ];

  constructor() { }

  ngOnInit() {
  }

}