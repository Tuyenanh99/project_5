import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SanphamService } from './../../LIB/sanpham.service';
import { sanpham } from './../../model/nguoidung';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  [x: string]: any;
  sanpham: any;
  loai: any;

  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.loadData();
    this.sanphamService.Getloai().subscribe(res => {
      // console.log(res);
      this.loai = res;
    });
  }
  loadData(){
    this.sanphamService.GetAll().subscribe(res => {
    // console.log(res);
    this.sanpham = res;
  });
}
  showAddModal() {
    // this.hidenID = 0;
    this.entity = {};
    this.modalAddEdit.show();
  }
  Save(value : any){

    console.log(value.ngaycapnhat);
    const str = value.ngaycapnhat.split('/');
    const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
    value.ngaycapnhat =new Date(year, month, date);
    console.log(value.ngaycapnhat);
    if(value.masp == undefined){
      this.sanphamService.addsp(value).subscribe(res =>{
        alert("Thêm thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
    else{
      this.sanphamService.editsp(value.masp,value).subscribe(res=>{
        alert("Sửa thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
  }
  showEdit(id:any){
    this.modalAddEdit.show();
    this.sanphamService.GetById(id).subscribe(res => {
      this.entity = res;
    });
  }
  deletItem(id: any){
    let confirmResult = confirm("Bạn có chắc chắn muốn xóa?");
    if(confirmResult){
        this.sanphamService.deltesp(id).subscribe(res =>{
          alert("Xóa thành công!");
          this.loadData();
        });
    }
  }
}
