import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = 'assets/books.json';
  constructor(
    private http: HttpClient,
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.books);
  }
}
