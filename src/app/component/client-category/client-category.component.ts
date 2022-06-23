import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types.ts/Category';

@Component({
  selector: 'app-client-category',
  templateUrl: './client-category.component.html',
  styleUrls: ['./client-category.component.css']
})
export class ClientCategoryComponent implements OnInit {
  @Input('categories') categories: Category[]
  category : any
  constructor(
    private CategoryService: CategoryService

  ) {
    this.categories = [],
    this.category = {}
   }

  ngOnInit(): void {
  }
  onGetCategory(id: number){
    this.CategoryService.getCategory(id).subscribe(data => {
      this.category = data;
      console.log(data);
      
      
    })
  }

}
