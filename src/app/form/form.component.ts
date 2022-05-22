import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    // sdt: 0,
    // avatar: ''
  }

  users = [
    {
      id: 1,
      name: 'truong',
      age: 30,
      email: 'truongnd@fe.edu.vn',
      // sdt: 0938384858,
      // avatar: ''
    },
    {
      id: 2,
      name: 'truong1',
      age: 30,
      email: 'truongnd@fe.edu.vn',
      // sdt: 0938384857,
      // avatar: ''
    }
  ]


  // onSubmit(FormData: {name: string , age: number, email: string} ) {
  onSubmit(userForm : NgForm ) {    //nhan toàn bộ form
    // theem :  , tìm ra id lớn nhất
    const userIds = this.users
    .map(user => user.id)
    .sort((a, b) => a - b );
    console.log(userIds);
    const newId = userIds[userIds.length - 1];

    //  nếu inputValues có id =0 thì là thêm mới =>2
        //  nếu inputValues có id !=0 thì là thêm mới =>2.1

    if (this.inputValues.id ==0) {
          // 2. thêm vào mảng
    this.users.push({
      ...userForm.value,
      id: newId + 1
    });
    }else{
      //2.1 chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.inputValues.id)
      if(idx > -1){
          this.users[idx] = {
              ...userForm.value,
              id: this.inputValues.id
          }
      }
      
    }

    //3. Cập nhật lại giá trị từ đầu
userForm.resetForm({
  name: '',
  age: 0,
  email: '',
});
    // this.inputValues = {    bị validate lại
    //   id: 0,
    //   name: '',
    //   age: 0,
    //   email: ''
    // }

  }

  onEdit(userId: number){
    // 1. Tim ra user co id laf userId truyen vao
  const EditUser = this.users.find(user => user.id === userId);
  if(EditUser){
    // console.log(EditUser);
    this.inputValues = {...EditUser
      ,id: this.inputValues.id
    };
  }
  }


  onDelete(userId: number){
    this.users = this.users.filter((user) => user.id !== userId)
  }
}

