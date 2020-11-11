import { Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/LIB/sanpham.service';
import { loaisp } from 'src/app/model/nguoidung';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loai:loaisp[];
  constructor(private readonly sanphamService: SanphamService) {}

    ngOnInit(): void {
      this.sanphamService.Getloai().subscribe(res => {
        this.loai = res;
      });
      console.log(this.loai);
    }

}
