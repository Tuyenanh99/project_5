import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SanphamService } from './../../LIB/sanpham.service';
import { sanpham } from './../../model/nguoidung';

@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent implements OnInit {

  [x: string]: any;

  @Input() loai: any;
  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
      this.sanphamService.Getloai().subscribe(res => {
      // console.log(res);
      this.loai = res;
    });
  }
  showAddModal() {
    // this.hidenID = 0;
    this.entity = {};
    this.modalAddEdit.show();
  }
  Save(value : any){
    if(value.maloai == undefined){
      this.sanphamService.addloai(value).subscribe(res =>{
        alert("Thêm thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
    else{
      this.sanphamService.editloai(value.maloai,value).subscribe(res=>{
        alert("Sửa thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
  }
  showEdit(id:any){
    this.modalAddEdit.show();
    this.sanphamService.GetloaiID(id).subscribe(res=>{
      this.entity = res;
    });
  }
  deletItem(id: any){
    let confirmResult = confirm("Bạn có chắc chắn muốn xóa?");
    if(confirmResult){
        this.sanphamService.delteloai(id).subscribe(res =>{
          alert("Xoá thành công!");
          this.loadData();
        });
    }
  }
}
