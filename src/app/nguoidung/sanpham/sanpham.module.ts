
import { SanphamComponent } from './sanpham.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChitietspComponent } from "../chitietsp/chitietsp.component";

@NgModule({
  declarations: [
    SanphamComponent,
    ChitietspComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            component: SanphamComponent,
          },
          // {
          //   path: ':id',
          //   component: ChitietspComponent
          // }
        ]
      },
  ]),
  ]
})
export class SanphamModule { }
