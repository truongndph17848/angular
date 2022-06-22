import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(
    private AuthService: AuthService, // các phương thức call API
    private router: Router, // điều hướng,
    private activateRoute: ActivatedRoute // lấy các tham số trên url
  ) {
    this.RegisterForm = new FormGroup({
      // name: new FormControl('', Validators.required), // FormControl(giá trị mặc định)
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        this.onValidateNameHasUser // chỉ gọi lại tên của hàm validate
      ]), // FormControl(giá trị mặc định)
      email: new FormControl(""),
      password:  new FormControl("")
    });
   }

  ngOnInit(): void {
  }


  onValidateNameHasUser (control: AbstractControl): ValidationErrors|null {
    const inputValue = control.value;

    if (!inputValue.includes('register')) {
      return {hasCategoryError: true};
    }

    return null;
  }

  redirectToList() {
    this.router.navigateByUrl('/auth/login');
  }

  onSubmit() {
    // 1. nhận dữ liệu từ form => this.productForm.value
    const data = this.RegisterForm.value;


    // 2. Call API tạo mới
    return this.AuthService.register(data).subscribe(data => {
      // 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }

}
