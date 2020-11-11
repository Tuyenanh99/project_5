export class sanpham {
  masp: number;
  maloai: number;
  tensp: string;
  dongia: number;
  ngaycapnhat: Date;
  hinhanh: string;
  baohanh: string;
  mota: string;
  soluong: number;
  luotbinhluan: number;
}
export class loaisp{
  maloai: number;
  tenloai: string;
  mota: string;
}
export class khachhang{
  makh: number;
  tenkh: string;
  taikhoan: string;
  matkhau: string;
  emailkh: string;
  diachikh: string;
  phonekh: string;
}
export class nhanvien{
  maNv: number;
  tenNv: string;
  chucVu: string;
  emailNv: string;
  diaChi: string;
  phoneNv: string;
}
export class nhacungcap{
  maNcc: number;
  tenNcc: string;
  emailNcc: string;
  diachiNcc: string;
  phoneNcc: string;
}
export class tintuc{
  maTin: number;
  tieude: string;
  hinhanh: string;
  noidung: string;
}
export class user{
  id: number;
  tenTk: string;
  matKhau: string;
  maNv: number;
  tenNv: string;
  chucVu: string;
}

