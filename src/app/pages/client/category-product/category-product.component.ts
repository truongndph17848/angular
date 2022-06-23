import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  category : any
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryService: CategoryService,
  ) {
    this.category = {
      _id : 0,
      name : "",
      status : 0,
    }
   
   }

  ngOnInit(): void {
  }

}
