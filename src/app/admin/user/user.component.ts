import { user } from './../../model/nguoidung';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SanphamService } from 'src/app/LIB/sanpham.service';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;
  nhanvien: any;
  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.loadData();
    this.sanphamService.GetAllnv().subscribe(res => {
      // console.log(res);
      this.nhanvien = res;
    });
  }
  loadData(){
    this.sanphamService.GetAllUser().subscribe(res => {
    // console.log(res);
    this.user = res;
  });
}
  showAddModal() {
    // this.hidenID = 0;
    this.entity = {};
    this.modalAddEdit.show();
  }
  Save(value : user){
    console.log(value);
    debugger;
    if(value.id == undefined){
      this.sanphamService.addus(value).subscribe(res =>{
        alert("Thêm thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
    else{
      this.sanphamService.editus(value.id,value).subscribe(res=>{
        alert("Sửa thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
  }
  showEdit(id:any){
    this.modalAddEdit.show();
    this.sanphamService.GetuserID(id).subscribe(res => {
      this.entity = res;
    });
  }
  deletItem(id: any){
    let confirmResult = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmResult){
        this.sanphamService.deleteus(id).subscribe(res =>{
          alert("Xóa thành công!");
          this.loadData();
        });
    }

  }

}
