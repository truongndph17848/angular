import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { TableStatusComponent } from './table/table-status/table-status.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormsModule } from '@angular/forms';
//ReactiveFormModule
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './form/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { BlogComponent } from './pages/client/blog/blog.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ShopDetailsComponent } from './pages/client/shop-details/shop-details.component';
import { CartListComponent } from './pages/client/cart-list/cart-list.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboradComponent } from './component/dashborad/dashborad.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HeaderClientComponent } from './component/header-client/header-client.component';
import { ClientCategoryComponent } from './component/client-category/client-category.component';
import { CategoryProductComponent } from './pages/client/category-product/category-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    TableGenderComponent,
    TableStatusComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    LoginComponent,
    BlogComponent,
    ContactComponent,
    ShopDetailsComponent,
    CartListComponent,
    DashboradComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    AdminUserListComponent,
    RegisterComponent,
    HeaderClientComponent,
    ClientCategoryComponent,
    CategoryProductComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,   //formsModule ???????c s??? d???ng ??? c??c component ???? c?? b??n tr??n
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
