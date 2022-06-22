import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {

  constructor(private router: Router){    //router ddere dieu huong

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    //1. lấy ra thông tin user trong localstorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const { user } = JSON.parse(localStorage.getItem('loggedInUser') as string)
       if (user.role) {
      return true;
    }
}
    
    this.router.navigateByUrl('/');
    return false
  }
  
}
