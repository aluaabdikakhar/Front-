import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {MyBooksComponent} from './my-books/my-books.component';
import {BooksComponent} from './books/books.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CategoryBooksComponent} from './category-books/category-books.component';
import {AuthorizationComponent} from './authorization/authorization.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: CategoryBooksComponent},
  { path: 'categories/:id/:isbn', component: BookDetailsComponent},
  { path: 'books', component: BooksComponent},
  { path: 'books/:isbn', component: BookDetailsComponent},
  { path: 'my-books', component: MyBooksComponent},
  { path: 'authorization', component: AuthorizationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
