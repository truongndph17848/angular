import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types.ts/Auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: User[];
  constructor(
    private UserService: UserService
  ) {
    this.users = [];
   }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    //lắng nghe api trả về kq , bao giờ trả về xog thì data có dữ liệu
    this.UserService.getUsers().subscribe((data) =>[
      // khi có dữ liệu sẽ gắn về cho danh sách
      this.users = data,
    ]);
}


onDelete(id: string|number){
  //confirm
  const confirmDelete = confirm('Bạn có chắc chắn xóa không? ');
  // kiểm ktra dữ liệu xóa
  if(confirmDelete){
    //file service
    this.UserService.deleteUser(id).subscribe((data) =>{
      this.onGetList();
    }) 
  } 
}

}
