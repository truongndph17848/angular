import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './component/dashborad/dashborad.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BlogComponent } from './pages/client/blog/blog.component';
import { CartListComponent } from './pages/client/cart-list/cart-list.component';
import { CategoryProductComponent } from './pages/client/category-product/category-product.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ShopDetailsComponent } from './pages/client/shop-details/shop-details.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'shop-details/:id',
        component: ShopDetailsComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'cart-list',
        component: CartListComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard], //dua vao day de kiem soat dc login trc khi vao admin
    children: [
      {
        path: 'products',
        children: [
          {
            path: '', 
            component: AdminProductListComponent
          },
          
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent,
            // ddaray /admin/products/id xuong d?????i c??ng trach vi???c nh???m id= 'create' , ph???n n??o x??a sp
          }

        ],
        
      },


      
      //router category
      {
        path: 'categorys',
        children: [
          {
            path: '',
            component: AdminCategoryListComponent
          },
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminCategoryFormComponent
          },
          {
            path: ':id',
            component: CategoryProductComponent
          }
        ],
      },


  //router user ph???n qu???n tr???
      {
        path: 'users',
        children: [
          {
            path: '',
            component: AdminUserListComponent
          }
        ],
      },


    ]

  },
  {
    path: 'auth',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]  // dua vao de route co the dung
})
export class AppRoutingModule { }
