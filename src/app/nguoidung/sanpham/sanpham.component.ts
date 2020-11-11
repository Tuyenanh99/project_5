import { SanphamService } from './../../LIB/sanpham.service';
import { CartService } from './../../LIB/cart.service';
import { sanpham } from './../../model/nguoidung';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  sanpham: any;
  constructor(private readonly sanphamService: SanphamService,
    private cartService: CartService) {
  }
  ngOnInit(): void {
    this.sanphamService.GetAll().subscribe(res => {
      //console.log(res);
      this.sanpham = res;
    });

  }
  addToCart(it) {
    this.cartService.addToCart(it);
    alert('Thêm thành công!');
  }

}
