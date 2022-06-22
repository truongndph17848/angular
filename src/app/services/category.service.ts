import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryCreate } from '../types.ts/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


    // Kiểu dữ liệu Observable sẽ giúp lắng nghe API nếu trả về kq  -- lấy về danh sách
    getCategorys(): Observable<Category[]> {
      return this.http.get<Category[]>(environment.categorys);
    }
  
  
  
    getCategory(id: number): Observable<Category> {
      return this.http.get<Category>(`${environment.categorys}/${id}`);
    }
    
    //api delete
    deleteCategory (id: number | string): Observable<any>{
      return this.http.delete(`${environment.categorys}/${id}`);
    }
  
    createCategory (data: CategoryCreate): Observable<Category> {
      return this.http.post<Category>(`${environment.categorys}`, data);
    }
  
    updateCategory (id: string, data:CategoryCreate): Observable<Category> {
      return this.http.put<Category>(`${environment.categorys}/${id}` , data);
    }
}
