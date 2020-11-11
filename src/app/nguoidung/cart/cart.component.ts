import { CartService } from './../../LIB/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any;
  total: any;
  constructor(private _cart: CartService) {
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for (let x of this.items){
        x.money = x.quantity * x.dongia;
        this.total += x.quantity * x.dongia;
      }
    });
  }
  addQty(item, quantity){
    item.quantity =  quantity;
    item.money =  Number.parseInt(item.quantity) *  item.dongia;
    this._cart.addQty(item);
  }
  clearCart(id) {
    this._cart.deleteItem(id);
    alert('Xóa thành công');
  }
}
