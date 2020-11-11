import { SanphamService } from 'src/app/LIB/sanpham.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent implements OnInit {

  id: any;
  products: any;
  constructor(private sanphamService: SanphamService,
    public route: ActivatedRoute,
    ) { }
  public listSanpham: any[];
  ngOnInit(): void {
   this.route.paramMap
   .pipe(
     map((params) => params.get('id')),
     switchMap((id) => this.sanphamService.Getloais(id))
   )
   .subscribe((products) => {
     this.products = products;
     console.log(this.products);
   });
  }

}
