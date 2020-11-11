import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SanphamService } from 'src/app/LIB/sanpham.service';

@Component({
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.css']
})
export class NhacungcapComponent implements OnInit {
  nhacungcap: any;
  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.sanphamService.GetAllncc().subscribe(res => {
    // console.log(res);
    this.nhacungcap = res;
  });
}
showAddModal() {
  // this.hidenID = 0;
  this.entity = {};
  this.modalAddEdit.show();
}
Save(value : any){
  if(value.maNcc == undefined){
    this.sanphamService.addncc(value).subscribe(res =>{
      alert("Thêm thành công!");
      this.modalAddEdit.hide();
      this.loadData();
    });
  }
  else{
    this.sanphamService.editncc(value.maNcc, value).subscribe(res=>{
      alert("Sửa thành công!");
      this.modalAddEdit.hide();
      this.loadData();
    });
  }
}
showEdit(id:any){
  this.modalAddEdit.show();
  this.sanphamService.GetnccID(id).subscribe(res=>{
    this.entity = res;
  });
}
deletItem(id: any){
  let confirmResult = confirm("Bạn có chắc chắn muốn xóa?");
  if(confirmResult){
      this.sanphamService.deletencc(id).subscribe(res =>{
        alert("Xoá thành công!");
        this.loadData();
      });
  }
}
}
