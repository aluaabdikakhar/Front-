import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyBooksService } from './my-books.service';
import { BookService } from './book.service';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = 'assets/allusers.json';
  user: User = {
    mail: '',
    password1: '',
    password2: '',
    booksISBN: []
  };
  book: Book;
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient,
    private myBooksService: MyBooksService,
    private booksService: BookService
  ) { }

  getAuthorizationToken() {
    return 'some-auth-token';
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.users, user, this.httpHeader);
  }
  addBook(user: User, isbn: number): Observable<User[]> {
    this.getUsers()
      .subscribe(data => {
        this.user = data.find(search => (search === user));
      });
    this.user.booksISBN.push(isbn);
    this.booksService.getBooks()
      .subscribe(data => {
        this.book = data.find(search => (search.isbn === isbn));
      });
    this.myBooksService.addBook(this.book);
    return this.http.put<User[]>(this.users, this.user, this.httpHeader);
  }
  deleteBook(user: User, isbn: number): Observable<User[]> {
    this.getUsers()
      .subscribe(data => {
        this.user = data.find(search => (search === user));
      });
    this.booksService.getBooks()
      .subscribe(data => {
        this.book = data.find(search => (search.isbn === isbn));
      });
    this.myBooksService.deleteBook(this.book);
    this.user.booksISBN.filter(num => num !== isbn);
    return this.http.put<User[]>(this.users, this.user, this.httpHeader);
  }
}
