import { LayoutModule } from './layout/layout.module';
import { NguoidungComponent } from './nguoidung.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../nguoidung/layout/header/header.component';
import { FooterComponent } from '../nguoidung/layout/footer/footer.component';
import { MenuComponent } from '../nguoidung/layout/menu/menu.component';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: NguoidungComponent,
    children: [
      {
      path: '',
      loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
      { path: 'sanpham',
      loadChildren: () => import('./sanpham/sanpham.module').then(m => m.SanphamModule)
      },
      { path: 'sanpham/:id', component: ChitietspComponent
      },
      { path: 'gioithieu', loadChildren:
      () => import('./gioithieu/gioithieu.module').then(m => m.GioithieuModule)
      },
      { path: 'tintuc', loadChildren:
      () => import('./tintuc/tintuc.module').then(m => m.TintucModule)
      },
      { path: 'danhmuc', loadChildren:
      () => import('./danhmuc/danhmuc.module').then(m => m.DanhmucModule)
      },
      { path: 'cart', loadChildren:
      () => import('./cart/cart.module').then(m => m.CartModule)
      },

      // {
      //   path:'nguoidung/nguoidung',
      //   component: MainComponent
      // }
    ]
  }

];

@NgModule({
  declarations: [NguoidungComponent, HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class NguoidungModule { }
