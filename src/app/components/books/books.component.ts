import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../models/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().then(books => {
      this.books = books;
    });
  }
}