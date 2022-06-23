import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRegister, TypeLoginRequest, TypeLoginResponse, User } from '../types.ts/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // HttpClient là 1 service model giúp ta gửi dữ liệu dễ hơn
  constructor( private http: HttpClient) {      
   }

  login(data: TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.login, data);
  }

  
   register(data: User): Observable<TypeLoginRegister>{
    return this.http.post<TypeLoginRegister>(environment.register, data);
  }



}
