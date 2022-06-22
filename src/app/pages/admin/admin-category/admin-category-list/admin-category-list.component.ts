import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types.ts/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categorys: Category[];
  constructor(
    private CategoryService: CategoryService
  ) { 
    this.categorys = [];
  }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    //lắng nghe api trả về kq , bao giờ trả về xog thì data có dữ liệu
    this.CategoryService.getCategorys().subscribe((data) =>[
      // khi có dữ liệu sẽ gắn về cho danh sách
      this.categorys = data,
    ]);
}


onDelete(id: string|number){
  //confirm
  const confirmDelete = confirm('Bạn có chắc chắn xóa không? ');
  // kiểm ktra dữ liệu xóa
  if(confirmDelete){
    //file service
    this.CategoryService.deleteCategory(id).subscribe((data) =>{
      this.onGetList();
    }) 
  } 
}

onUpdateStatus(productId: number, newStatus: number) {
this.CategoryService.updateCategory(`${productId}`, {
  
  status: newStatus
}).subscribe(data => {
  this.onGetList();
});
}

}
