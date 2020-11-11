import { SanphamService } from './../../LIB/sanpham.service';
import { CartService } from './../../LIB/cart.service';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})

export class ChitietspComponent implements OnInit {
  [x: string]: any;

  item: any;
  id: any;
  products: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sanphamservice: SanphamService,
    private cartService: CartService,
    public route: ActivatedRoute)

    {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      first(),
      map((params) => params.get('id')),
      switchMap((masp) => this.sanphamservice.GetById(masp))
    )
    .subscribe((item) => {
      this.item = item;
    });
  }

  addToCart(it) {
    this.cartService.addToCart(it);
    alert('Thêm thành công!');
  }
}
