import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types.ts/Product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  product: Product;
  cartItemValue: number = 1;
  constructor(
    private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private lsService: LocalStorageService,
              private toastr: ToastrService,
  ) {
    this.product = {
      _id: 0,
      name: '',
      price: 0,
      sale_price: 0,
      description: "",
      image_url: "",
      status: 0,
      category_id: "",
    }
   }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id'];
    console.log(idFromUrl);
    

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
      // console.log(this.product);

    })
  }

  onInputValueChang(event: any){
    this.cartItemValue = event.target.value;
  }

  onAddToCart(){
    // 1. định nghĩa cấu trúc dữ liệu vào giỏ hàng
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      sale_price: this.product.sale_price,
      description: this.product.description,
      image_url: this.product.image_url,
      status: this.product.status,
      category_id: this.product.category_id,
      value: +this.cartItemValue
    };
    // //2. kiểm tra xem  đã có sp trong giỏ hàng chưa
    // //2.1 lấy ra toàn bộ sp trong giỏ
    // const cartItems =JSON.parse(localStorage.getItem('cart') || '[]');
    // console.log(addItem, cartItems);
    // //2.2 Tìm phần tử trong giỏ có id === addItem.id

    // const existItem = cartItems.find((item: ProductCart) =>item.id === addItem.id)
    
    // //3. nesu có thì push luôn vào làm phàn tử mới
    // if(!existItem){
    //   cartItems.push(addItem);
    // }else{

    //   // nếu đã có thì cập nhật số lượng mới = số lượng cũ cộng thêm
    //   existItem.value += addItem.value;
    // }

    // //4. cập nhật dữ liệu vào giỏ hàng
    // localStorage.setItem('cart', JSON.stringify(cartItems));

    
    this.lsService.setItem(addItem);
    //5. cập nhật lại giá trị cho ô input
    this.cartItemValue = 1;

    // window.confirm("bạn có muốn thêm sản phẩm này không");

    this.toastr.success("bạn đã thêm sản phẩm thành công");
  }

  

}
