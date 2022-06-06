import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  ];


  FormValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    // sdt: 0,
    // avatar: ''
  }

  onParentSubmit(FormData: any){

    
    console.log('parent form data' ,FormData );
    // theem :  , tìm ra id lớn nhất
    const userIds = this.users
    .map(user => user.id)
    .sort((a, b) => a - b );
    console.log(userIds);
    const newId = userIds[userIds.length - 1];

    //  nếu FormValues có id =0 thì là thêm mới =>2
        //  nếu FormValues có id !=0 thì là thêm mới =>2.1

    if (this.FormValues.id ==0) {
          // 2. thêm vào mảng
    this.users.push({
      ...FormData,
      id: newId + 1
    });
    }else{
      //2.1 chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.FormValues.id)
      if(idx > -1){
          this.users[idx] = {
              ...FormData,
              id: this.FormValues.id
          }
      }
      
    }
  }

  onParentDelete(userId: number){
    this.users = this.users.filter((user) => user.id !== userId)
  }

  onParentUpdate(userId: number){
        // 1. Tim ra user co id laf userId truyen vao
  const EditUser = this.users.find(user => user.id === userId);
  if(EditUser){
    // console.log(EditUser);
    this.FormValues = {...EditUser
      ,id: this.FormValues.id
    };
  }
  }
}
