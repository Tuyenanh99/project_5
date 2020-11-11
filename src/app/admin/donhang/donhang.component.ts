import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SanphamService } from 'src/app/LIB/sanpham.service';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent implements OnInit {
  [x: string]: any;
  donhang: any;
  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
      this.sanphamService.GetAllDonhang().subscribe(res => {
      // console.log(res);
      this.donhang = res;
    });
  }

}
