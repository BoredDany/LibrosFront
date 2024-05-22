import { Injectable } from '@angular/core';
import axios from 'axios';
import { Book } from '../models/Book';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private localUrl = 'http://localhost:8080/grupo23/books/';

  constructor() { }

  //GET
  getBooks(): Promise<Book []>{
    return axios.get<Book []>(this.localUrl).then(response => response.data);
  }

  //GET BY ID
  getBookbyId(id: number): Promise<Book>{
    return axios.get<Book>(this.localUrl + id).then(response => response.data);
  }

  //POST 
  postBook(book: Book): Promise<Book>{
    return axios.post<Book>(this.localUrl, book).then(response => response.data);
  }

  //PUT
  updateBook(book: Book): Promise<Book>{
    return axios.put<Book>(this.localUrl + book.idBook, book).then(response => response.data);
  }

  //DELETE
  deleteBook(id: number): Promise<Book>{
    return axios.delete<Book>(this.localUrl + id).then(response => response.data);
  }
}
