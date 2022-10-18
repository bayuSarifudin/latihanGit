import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Clean Codes',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'Clean Codes',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'Clean Codes',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'Clean Codes',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'Clean Codes',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'Clean Codes',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
  ];
  isShowing: boolean = false;

  toogleBooks() {
    this.isShowing = !this.isShowing;
  }

  constructor() {}

  ngOnInit(): void {}
}
