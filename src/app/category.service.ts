import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = 'assets/categories.json';
  constructor(
    private http: HttpClient,
  ) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categories);
  }
}
