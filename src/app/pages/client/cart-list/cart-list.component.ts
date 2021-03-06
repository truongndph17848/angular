import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductCart } from 'src/app/types.ts/Product';



@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: ProductCart[] = [];
  cartItemValues: number = 0;
  constructor(
    private lsService: LocalStorageService
  ) {

  }

  ngOnInit(): void {
    this.onSetCartItems();
    // Cần 1 cách thức nào đó có thể lắng nghe việc thay đổi giá trị của ls
    // Hoặc cho biết khi nào có thể lấy dữ liệu mới
    this.lsService.watchService().subscribe(data => {
      // Khi serviceSubject.next('') thì subscribe sẽ được gọi
      this.onSetCartItems();
    });
  }

  onSetCartItems () {
    this.cartItems = this.lsService.getItem();

    this.cartItemValues = 0;
    this.cartItems.forEach(item => {
      this.cartItemValues += item.value;
    });
  }
}


