import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit {
  searchText;
  arr = [
    {
      id: 1,
      key: 'deadpool',
      name: 'Deadpool',
      description:
        'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
      genres: ['action', 'adventure', 'comedy'],
      rate: '8.6',
      length: '1hr 48mins',
      cover: 'deadpool-cover.jpg',
      img:
        'https://images-na.ssl-images-amazon.com/images/I/61VkGL0CAGL._AC_SL1100_.jpg',
    },
    {
      id: 1,
      key: 'deadpool',
      name: 'Deadpool',
      description:
        'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
      genres: ['action', 'adventure', 'comedy'],
      rate: '8.6',
      length: '1hr 48mins',
      cover: 'deadpool-cover.jpg',
      img:
        'https://images-na.ssl-images-amazon.com/images/I/61VkGL0CAGL._AC_SL1100_.jpg',
    },
    {
      id: 1,
      key: 'deadpool',
      name: 'Deadpool',
      description:
        'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
      genres: ['action', 'adventure', 'comedy'],
      rate: '8.6',
      length: '1hr 48mins',
      cover: 'deadpool-cover.jpg',
      img:
        'https://images-na.ssl-images-amazon.com/images/I/61VkGL0CAGL._AC_SL1100_.jpg',
    },
    {
      id: 1,
      key: 'deadpool',
      name: 'Deadpool',
      description:
        'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
      genres: ['action', 'adventure', 'comedy'],
      rate: '8.6',
      length: '1hr 48mins',
      cover: 'deadpool-cover.jpg',
      img:
        'https://images-na.ssl-images-amazon.com/images/I/61VkGL0CAGL._AC_SL1100_.jpg',
    },
    { id: 1,
        key: 'deadpool',
        name: 'Deadpool',
        description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
        genres: [
          'action',
          'adventure',
          'comedy'
        ],
        rate: '8.6',
        length: '1hr 48mins',        
        cover: 'deadpool-cover.jpg',
        img:
        'https://images-na.ssl-images-amazon.com/images/I/61VkGL0CAGL._AC_SL1100_.jpg',
    },
    { id: 1,
        key: 'deadpool',
        name: 'Deadpool',
        description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
        genres: [
          'action',
          'adventure',
          'comedy'
        ],
        rate: '8.6',
        length: '1hr 48mins',        
        cover: 'deadpool-cover.jpg',
        img:
        'https://images-na.ssl-images-amazon.com/images/I/61VkGL0CAGL._AC_SL1100_.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
