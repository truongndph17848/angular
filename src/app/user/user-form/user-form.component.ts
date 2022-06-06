import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  //1. định nghĩa sự kiện Output - evenEmitter để bắn dữ liệu ngược
@Output() handleSubmit: EventEmitter<any>;        // EventEmitter của @angular/core
@Input() inputValues: any;
  constructor() {

    // 2. Khai baso gias tri default
    this.handleSubmit = new EventEmitter();
   }

  ngOnInit(): void {
  }

  // inputValues = {
  //   id: 0,
  //   name: '',
  //   age: 0,
  //   email: '',
  //   // sdt: 0,
  //   // avatar: ''
  // }


  // onSubmit(FormData: {name: string , age: number, email: string} ) {
  onSubmit(userForm : NgForm ) {    //nhận toàn bộ form
    // 3. Gửi dữ liệu đi
    this.handleSubmit.emit(userForm.value);


    
  userForm.resetForm({
    name: '',
    age: 0,
    email: '',
  });

  }

}
