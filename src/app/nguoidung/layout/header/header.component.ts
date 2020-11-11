import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../LIB/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: any;
  total = 0;
  constructor(
    private CartService:CartService,
  ) { }

  ngOnInit(): void {
    this.CartService.items.subscribe((res) => {
      this.items = res;
      for(let x of this.items){
        this.total =+ Number.parseInt(x.quantity);
      }
    });
  }

}
