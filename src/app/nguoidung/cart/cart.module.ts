import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        children: [
          {
            path: 'cart',
            component: CartComponent,
          },
        ]
      },
  ]),
  ]
})
export class CartModule { }
