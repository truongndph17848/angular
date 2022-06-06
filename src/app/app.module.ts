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
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductCreateComponent } from './pages/admin/admin-product/admin-product-create/admin-product-create.component';
import { AdminProductEditComponent } from './pages/admin/admin-product/admin-product-edit/admin-product-edit.component';

import {HttpClientModule} from '@angular/common/http';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';



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
    AdminProductCreateComponent,
    AdminProductEditComponent,
    AdminProductDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,   //formsModule được sử dụng ở các component đã có bên trên
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
