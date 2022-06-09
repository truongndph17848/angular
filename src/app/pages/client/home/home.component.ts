import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types.ts/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]
  constructor(
    private productService: ProductService
  ) {
    this.products = []
   }

  ngOnInit(): void {
            //lắng nghe api trả về kq , bao giờ trả về xog thì data có dữ liệu
            this.productService.getProducts().subscribe((data) =>[
              // khi có dữ liệu sẽ gắn về cho danh sách
              this.products = data,
            ]);
  }

}
