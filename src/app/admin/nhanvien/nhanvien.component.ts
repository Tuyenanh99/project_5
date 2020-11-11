import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SanphamService } from 'src/app/LIB/sanpham.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {
  nhanvien: any;
  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }


  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.sanphamService.GetAllnv().subscribe(res => {
    // console.log(res);
    this.nhanvien = res;
  });
}
  showAddModal() {
    // this.hidenID = 0;
    this.entity = {};
    this.modalAddEdit.show();
  }
  Save(value : any){
    if(value.maNv == undefined){
      this.sanphamService.addnv(value).subscribe(res =>{
        alert("Thêm thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
    else{
      this.sanphamService.editnv(value.maNv,value).subscribe(res=>{
        alert("Sửa thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
  }
  showEdit(id:any){
    this.modalAddEdit.show();
    this.sanphamService.GetnvID(id).subscribe(res => {
      this.entity = res;
    });
  }
  deletItem(id: any){
    let confirmResult = confirm("Bạn có chắc chắn muốn xóa?");
    if(confirmResult){
        this.sanphamService.deletenv(id).subscribe(res =>{
          alert("Xóa thành công!");
          this.loadData();
        });
    }

  }

}
