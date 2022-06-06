import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  constructor(private productService: ProductService, private router: Router
    //;lấy tham số trên url
    , private activateRoute: ActivatedRoute
    ) {   //các phương thức call api
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required,
         Validators.minLength(6),
         this.onValidateNameHasProduct
        ] )  // FormControl (giá trị mặc định  -- rỗng , validate   - nếu chỉ vld 1c thì dùng ntn ko thì cho vào mảng) , tham số thứ 2 là validate
      //, price: new FormControl(0)
  });



  //định nghĩa productId
  this.productId ='0';
   }

  ngOnInit(): void {


    //update
    this.productId =  this.activateRoute.snapshot.params['id'];

    if(this.productId){
      this.productService.getProduct(+this.productId).subscribe(data =>{
        // cập nhật data cho form
        this.productForm.patchValue({
          name: data.name,
        });
      })
    }
  }






  onValidateNameHasProduct(control: AbstractControl) : ValidationErrors|null {

    // log control xong xem value no co gif la biet
    const inputValue = control.value;

    if(!inputValue.includes('product')){
      return {hasProductError : true};
    }

    return null;
  }


    //tajo đường dẫn rieng
  redirectToList(){
    this.router.navigateByUrl('/admin/products');
  }

  onSubmit(){
    console.log(this.productForm.value);
    // 1. Nhận dữ liệu form => this.productFỏm.value
    const data = this.productForm.value;

    // tạo mới check
    if(this.productId !== '' && this.productId !== undefined){
      this.productService.updateProduct(this.productId, data).subscribe(data =>{
        this.redirectToList();
      })
    }


    //2 . call api
    this.productService.createProduct(data).subscribe(data => {   //qua file service
    //3. quay lại danh sách product

    //c1:
    // this.router.navigate(['/admin' , 'products'])

    //c2:
    this.redirectToList();

    //3.1 khi đã quay về list thì ngOnInit trong lisst sẽ lại dc chạy và call api để load danh sách mới
    })  

  }
}
