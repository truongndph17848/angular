import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types.ts/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // khai báo http để có đối  tượng httpclient tương tác với các phương thức của API
  constructor(private http: HttpClient) { }

    // Kiểu dữ liệu Observable sẽ giúp lắng nghe API nếu trả về kq  -- lấy về danh sách
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }



  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${id}`);
  }
  
  //api delete
  deleteProduct (id: number | string): Observable<any>{
    return this.http.delete(`${environment.products}/${id}`);
  }

  createProduct (data: ProductCreate): Observable<Product>{
    return this.http.post<Product>(`${environment.products}` , data);
  }

  updateProduct (id: string, data:ProductCreate): Observable<Product> {
    return this.http.put<Product>(`${environment.products}/${id}` , data);
  }
  
}
