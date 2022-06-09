import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types.ts/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];

    // định nghĩa service dưới tên 1 biến , đã tạo bên services
  constructor(private productService : ProductService){
    this.products = [];
  }
  // khi component render xong sẽ chạy 1 lần vào ngOninit
  ngOnInit(): void {
    // //lắng nghe api trả về kq , bao giờ trả về xog thì data có dữ liệu
    // this.productService.getProducts().subscribe((data) =>[
    //   // khi có dữ liệu sẽ gắn về cho danh sách
    //   this.products = data,
    // ]);


    this.onGetList();
  }


  
  onGetList() {
        //lắng nghe api trả về kq , bao giờ trả về xog thì data có dữ liệu
        this.productService.getProducts().subscribe((data) =>[
          // khi có dữ liệu sẽ gắn về cho danh sách
          this.products = data,
        ]);
  }



  onDelete(id: string|number){
      //confirm
      const confirmDelete = confirm('Bạn có chắc chắn xóa không? ');
      // kiểm ktra dữ liệu xóa
      if(confirmDelete){
        //file service
        this.productService.deleteProduct(id).subscribe((data) =>{
          this.onGetList();
        }) 
      } 
  }

  onUpdateStatus(productId: number, newStatus: number) {
    this.productService.updateProduct(`${productId}`, {
      
      status: newStatus
    }).subscribe(data => {
      this.onGetList();
    });
  }



}
