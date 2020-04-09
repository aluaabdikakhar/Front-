import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Book} from '../book';
import {MyBooksService} from '../my-books.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  authorized = true;
  selected: Book;
  books: Book[];
  user: User = {
    mail: '',
    password1: '',
    password2: '',
    booksISBN: []
  };
  constructor(
    private myBooksService: MyBooksService,
    private userService: UserService,
  ) { }
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.myBooksService.getMyBooks()
      .subscribe(books => (this.books = books));
  }
  onSelect(book: Book) {
    this.selected = book;
  }

  deleteBook(): void {
    this.userService.deleteBook(this.user, this.selected.isbn)
      .subscribe();
    window.alert('Your book has been deleted!');
  }
}
