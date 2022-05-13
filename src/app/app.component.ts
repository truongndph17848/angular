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
      id: '1',
      name: 'cuong dola',
      status: 0
    },
    {
      id: '2',
      name: 'huan hoa hong',
      status: 1
    }
  ];


  teachers = [

    {
      id: '1',
      name: 'thay huan',
      age: 19,
      gender: 0,
      avatar: 'https://dienthoaivui.com.vn/wp-content/uploads/2020/10/hinh-nen-iphone-12-19-scaled.jpg',
      status: 0,
    },
    {
      id: '2',
      name: 'thay huan',
      age: 31,
      gender: 1,
      avatar: 'https://dienthoaivui.com.vn/wp-content/uploads/2020/10/hinh-nen-iphone-12-19-scaled.jpg',
      status: 1,
    }
  ];



}
