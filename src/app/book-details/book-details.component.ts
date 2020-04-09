import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import { ActivatedRoute } from '@angular/router';
import {BookService} from '../book.service';
import { MyBooksService} from '../my-books.service';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  selected: Book;
  isbn = +this.route.snapshot.paramMap.get('isbn');
  myBooks: Book[];
  user: User = {
    mail: '',
    password1: '',
    password2: '',
    booksISBN: []
  };
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private myBooksService: MyBooksService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getMyBooks();
    this.getBook();
  }

  getBook(): void {
    this.bookService.getBooks()
      .subscribe(data => {
        this.selected = data.find(book => (book.isbn === this.isbn));
      });
  }
  private getMyBooks() {
    this.myBooksService.getMyBooks()
      .subscribe(data => (this.myBooks = data));
  }
  addBook(): void {
    this.userService.addBook(this.user, this.selected.isbn)
      .subscribe();
    window.alert('Your book has been added!');
  }
}
