import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SanphamService } from 'src/app/LIB/sanpham.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {

  tintuc: any;
  public hidenID: number;
  public entity: any;

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  constructor(private readonly sanphamService: SanphamService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.sanphamService.GetAlltintuc().subscribe(res => {
    // console.log(res);
    this.tintuc = res;
  });
}
  showAddModal() {
    // this.hidenID = 0;
    this.entity = {};
    this.modalAddEdit.show();
  }
  Save(value : any){
    if(value.maTin == undefined){
      this.sanphamService.addtt(value).subscribe(res =>{
        alert("Thêm thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
    else{
      this.sanphamService.edittt(value.maTin,value).subscribe(res=>{
        alert("Sửa thành công!");
        this.modalAddEdit.hide();
        this.loadData();
      });
    }
  }
  showEdit(id:any){
    this.modalAddEdit.show();
    this.sanphamService.GettinID(id).subscribe(res => {
      this.entity = res;
    });
  }
  deletItem(id: any){
    let confirmResult = confirm("Bạn có chắc chắn muốn xóa?");
    if(confirmResult){
        this.sanphamService.deletett(id).subscribe(res =>{
          alert("Xóa thành công!");
          this.loadData();
        });
    }
  }
}
