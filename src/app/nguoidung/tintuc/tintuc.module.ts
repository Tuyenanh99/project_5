import { TintucComponent } from './tintuc.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TintucComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: TintucComponent,
        children: [
          {
            path:'tintuc',
            component: TintucComponent
          }
        ]
      },
  ]),
  ]
})
export class TintucModule { }
