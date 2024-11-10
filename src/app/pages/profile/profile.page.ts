import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  // Example user data
  user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    profilePicture: 'assets/images/avatar.png', // Example image
    bio: 'Travel enthusiast and photographer.',
  };

  // Static data for favorite and visited places
  favoritePlaces = [
    { name: 'Gateway of India', city: 'Mumbai' },
    { name: 'Charminar', city: 'Hyderabad' },
  ];

  visitedPlaces = [
    { name: 'Marine Drive', city: 'Mumbai' },
    { name: 'Golconda Fort', city: 'Hyderabad' },
  ];

  constructor() {}
}
