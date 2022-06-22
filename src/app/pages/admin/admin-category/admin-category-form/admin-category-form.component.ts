import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  CategoryForm: FormGroup;
  categoryId: string;
  constructor(
    private CategoryService: CategoryService, // các phương thức call API
    private router: Router, // điều hướng,
    private activateRoute: ActivatedRoute // lấy các tham số trên url
  ) {
    this.CategoryForm = new FormGroup({
      // name: new FormControl('', Validators.required), // FormControl(giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        this.onValidateNameHasCategory // chỉ gọi lại tên của hàm validate
      ]), // FormControl(giá trị mặc định)

    });
    this.categoryId = '';
   }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['id']; // +'5'


    if (this.categoryId) {
      this.CategoryService.getCategory(+this.categoryId).subscribe(data => {
        // Cập nhật data cho form (data: {id: 5, name: '...'})
        this.CategoryForm.patchValue({
          name: data.name,
        });
      })
    }
  }


  onValidateNameHasCategory (control: AbstractControl): ValidationErrors|null {
    const inputValue = control.value;

    if (!inputValue.includes('category')) {
      return {hasCategoryError: true};
    }

    return null;
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/category');
  }

  onSubmit() {
    // 1. nhận dữ liệu từ form => this.productForm.value
    const data = this.CategoryForm.value;

    if (this.categoryId !== '' && this.categoryId !== undefined) {
      return this.CategoryService.updateCategory(this.categoryId, data).subscribe(data => {
        this.redirectToList();
      })
    }

    // 2. Call API tạo mới
    return this.CategoryService.createCategory(data).subscribe(data => {
      // 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }

}
