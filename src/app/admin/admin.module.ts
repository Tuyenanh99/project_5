import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { MenuComponent } from '../admin/shared/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from '../admin/shared/header/header.component';
import { FooterComponent } from '../admin/shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { KhachangComponent } from './khachang/khachang.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DonhangComponent } from './donhang/donhang.component';
import { HoadonnhapComponent } from './hoadonnhap/hoadonnhap.component';
export const adminRoutes: Routes = [
  {
      path: '', component: AdminComponent,
      children: [
        // {
        //    path: '', loadChildren: () => import('../admin/main/main.module').then((m) => m.MainModule)
        // },
        {
            path: '', loadChildren: () => import('../admin/login/login.module').then((m) => m.LoginModule)
        },
        {
          path: 'adminquanly', component: MainComponent
        },
        {
          path: 'adminsp', component: SanphamComponent
        },
        {
          path: 'adminloai', component: LoaisanphamComponent
        },
        {
          path: 'adminnv', component: NhanvienComponent
        },
        {
          path: 'adminkh', component: KhachangComponent
        },
        {
          path: 'adminncc', component: NhacungcapComponent
        },
        {
          path: 'admintintuc', component: TintucComponent
        },
        {
          path: 'adminuser', component: UserComponent
        },
      ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    AdminComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
    SanphamComponent,
    LoaisanphamComponent,
    KhachangComponent,
    NhacungcapComponent,
    NhanvienComponent,
    TintucComponent,
    UserComponent,
    LoginComponent,
    DonhangComponent,
    HoadonnhapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(adminRoutes),
  ]
})
export class AdminModule { }
