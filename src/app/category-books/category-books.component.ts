import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent implements OnInit {
  selectedCategoryBooks: Book[];
  selectedBook: Book;
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getCategoryBooks();
  }
  getCategoryBooks(): void {
    this.bookService.getBooks()
      .subscribe(data => {
        this.selectedCategoryBooks = data.filter(books => books.categoryId === this.id);
      });
  }
  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
