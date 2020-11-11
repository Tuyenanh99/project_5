import { Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/LIB/sanpham.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {

  tintuc: any;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.sanphamService.GetAlltintuc().subscribe(res => {
      console.log(res);
      this.tintuc = res;
    });
  }

}
