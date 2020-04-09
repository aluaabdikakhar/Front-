import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selected: Category;
  categories: Category[];
  constructor(
    public categoriesService: CategoryService,
  ) { }
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  onSelect(category: Category): void {
    this.selected = category;
  }
}
