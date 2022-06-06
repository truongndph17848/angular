import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // dữ liệu nhạn từ cha chứ ko quản lý nữa
  @Input() users: any;

  @Output() handleDelete: EventEmitter<number>;
  @Output() handleUpdate: EventEmitter<number>;
  constructor() {
    this.handleDelete = new EventEmitter();
    this.handleUpdate = new EventEmitter();
   }

  ngOnInit(): void {
  }




  onEdit(userId: number){
    this.handleUpdate.emit(userId); 
    // 1. Tim ra user co id laf userId truyen vao
  // const EditUser = this.users.find(user => user.id === userId);
  // if(EditUser){
  //   // console.log(EditUser);
  //   this.inputValues = {...EditUser
  //     ,id: this.inputValues.id
  //   };
  // }
  }


  onDelete(userId: number){
    this.handleDelete.emit(userId); 
    // this.users = this.users.filter((user) => user.id !== userId)
  }
}
