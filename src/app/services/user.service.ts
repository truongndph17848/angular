import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types.ts/Auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
       // Kiểu dữ liệu Observable sẽ giúp lắng nghe API nếu trả về kq  -- lấy về danh sách
       getUsers(): Observable<User[]> {
        return this.http.get<User[]>(environment.Users);
      }
      
      //api delete
      deleteUser (id: number | string): Observable<any>{
        return this.http.delete(`${environment.Users}/${id}`);
      }
}
