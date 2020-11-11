import { Component, OnInit } from '@angular/core';
import {SanphamService} from '../../LIB/sanpham.service';
import { CartService } from '../../LIB/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  main: any;
  constructor(private readonly sanphamService: SanphamService, private cartService: CartService) {
  }
  ngOnInit(): void {
    // debugger;
    this.sanphamService.GetAll().subscribe(res => {
      //console.log(res);
      this.main = res;
    });
  }
  addToCart(it) {
    this.cartService.addToCart(it);
    alert('Thêm thành công!');
  }
}
