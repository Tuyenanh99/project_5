import { Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/LIB/sanpham.service';

@Component({
  selector: 'app-khachang',
  templateUrl: './khachang.component.html',
  styleUrls: ['./khachang.component.css']
})
export class KhachangComponent implements OnInit {

  kh: any;

  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.sanphamService.GetAllkh().subscribe(res => {
      console.log(res);
      this.kh = res;
    });
  }

}
