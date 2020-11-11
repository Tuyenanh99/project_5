import { DanhmucComponent } from './danhmuc.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DanhmucComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'danhmuc/:id',
        component: DanhmucComponent,
      },
  ]),
  ]
})
export class DanhmucModule { }
