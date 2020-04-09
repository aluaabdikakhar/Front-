import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {
  books = 'assets/my-books.json';
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient,
  ) { }

  getMyBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.books);
  }
  addBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(this.books, book, this.httpHeader);
  }
  deleteBook(book: Book): Observable<Book[]> {
    const url = `${this.books}/${book.isbn}`;
    return this.http.delete<Book[]>(url, this.httpHeader);
  }
}
