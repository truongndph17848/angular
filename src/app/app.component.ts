import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular_web16304';

  //phần logirc giá trị , định nghĩa giá trị biến và sử dụng ở html
  name = 'truongndph';
  sdt = '087878787878';

  // dữ liệu mảng
  students = [

    {
      id: 1,
      name: 'cuong dola',
      status: 0
    },
    {
      id: 2,
      name: 'huan hoa hong',
      status: 1
    }
  ];


  teachers = [

    {
      id: 1,
      name: 'thay huan',
      age: 19,
      gender: 0,
      avatar: 'https://dienthoaivui.com.vn/wp-content/uploads/2020/10/hinh-nen-iphone-12-19-scaled.jpg',
      status: 0,
    },
    {
      id: 2,
      name: 'thay huan',
      age: 31,
      gender: 1,
      avatar: 'https://dienthoaivui.com.vn/wp-content/uploads/2020/10/hinh-nen-iphone-12-19-scaled.jpg',
      status: 1,
    }
  ];


      // định nghĩa hàm khi click thẻ h1 ở file html
      schoolName = "";

  ClickH1(){
    console.log("h1");
    this.schoolName = "<    * * * ** * * * * * * * * *>";
  }

     //định nghĩa hàm khi click nút ẩn hiện
  showStatus = true;
  changTableStatus(){
    this.showStatus = !this.showStatus;
  }

  inputValue = " update";
  // bắt sự kiện khi điền form
  changleInput(event:any){
    // console.log(event.target.value);
    this.inputValue = event.target.value;
  }

  // bắt sự kiện khi điền form buổi 3

  inputValues = {
    name: '',
    age: '',
    gender:'',
    avatar: '',
    status: ''

  };
  // onInputName(event:any, info: string){
  //   // console.log(event.target.value, info);
  //   this.inputValues.name = event.target.value;
    
  // }

  // onInputAge(event:any, info: string){
  //   this.inputValues.age = event.target.value;
  // }


  // bắt sự kiện hàm chung    // key chir dduocjw laf gias tr 'name' age đã định nghĩa ở obj
  onInput(event:any , key: 'name'|'age'|'gender'|'avatar'|'status'){
    this.inputValues[key] = event.target.value;
  }



  onSubmit(){
    console.log(this.inputValues);
    // thêm dữ liệu vừa thao tác ở form và mảng  (đưa obj vào mảng)
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age,  // đưa age từ chuỗi input về số
      gender: +this.inputValues.gender,
      avatar: this.inputValues.avatar,
      status: +this.inputValues.status,
      id: this.teachers.length + 1
    });
    // cập nhật lại giá trị cho input ở form
    //[value]="this.inputValues.name"
  }
}
