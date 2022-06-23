import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types.ts/Category';
import { Product } from 'src/app/types.ts/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]

  categories: Category[];
  category : Category
  @Output() handleGetCategory : EventEmitter<any> 
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.products = []
    this.categories = []
    this.handleGetCategory = new EventEmitter()
    this.category = {
      _id : 0,
      name : "",
      status : 0,
    }
   }

  ngOnInit(): void {
            //lắng nghe api trả về kq , bao giờ trả về xog thì data có dữ liệu
            this.productService.getProducts().subscribe((data) =>[
              // khi có dữ liệu sẽ gắn về cho danh sách
              this.products = data,
            ]);

            this.onGetCategories()
  }

  onGetCategories() {
    // Lắng nghe API trả về kq, bao giờ trả về xong thì data sẽ có dữ liệu
    this.categoryService.getCategorys().subscribe((data: Category[]) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      this.categories = data;
      console.log(data);
    });
  }
  onGetCategory(id: number){
    this.categoryService.getCategory(id).subscribe(data => {
      this.category = data;
      console.log(this.category);
    })
  }

}
