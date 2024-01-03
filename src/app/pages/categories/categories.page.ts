import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categories:any = [];
  constructor(
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategory().then((categories) => {
      this.categories = categories;
      console.log(this.categories)
    }).catch((error) => {
      console.log(error);
    })
  }

}
