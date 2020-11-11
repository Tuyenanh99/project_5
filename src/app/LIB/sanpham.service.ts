import { nhacungcap, nhanvien, tintuc, user } from './../model/nguoidung';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {sanpham, loaisp} from '../model/nguoidung';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};
@Injectable({
  providedIn: 'root',
})
export class SanphamService {
  private API_URL = 'https://localhost:44348/api';
  constructor(private http: HttpClient) {}

  //sản phẩm
  GetAll() {
    return this.http.get(`${this.API_URL}/sanphams`);
  }
  GetById(id: string) {
    const url = `${this.API_URL}/sanphams/${id}`;
    return this.http.get(url);
  }
  addsp(val: any){
    return this.http.post(this.API_URL + '/sanphams', val);
  }
  editsp(id: any, val: any){
    return this.http.put(this.API_URL + '/sanphams/' + id, val);
  }
  deltesp(id: any){
    return this.http.delete(this.API_URL + '/sanphams/' + id);
  }
  //loại sản phẩm
  Getloai(): Observable<loaisp[]> {
    return this.http.get<loaisp[]>(`${this.API_URL}/Loaisps`);
  }

  GetloaiID(id: any): Observable<loaisp[]> {
    return this.http.get<loaisp[]>(`${this.API_URL}/Loaisps/${id}`);
  }
  Getloais(id) {
    return this.http.get(`${this.API_URL}/sanphams/GetSanphamtheoloai/${id}`);
  }
  addloai(val: any){
    return this.http.post(this.API_URL + '/Loaisps', val);
  }
  editloai(id: any, val: any){
    return this.http.put(this.API_URL + '/Loaisps/' + id, val);
  }
  delteloai(id: any){
    return this.http.delete(this.API_URL + '/Loaisps/' + id);
  }

  //khách hàng
  GetAllkh() {
    return this.http.get(`${this.API_URL}/Khachangs`);
  }

  //nhân viên
  GetAllnv() {
    return this.http.get(`${this.API_URL}/NhanViens`);
  }
  GetnvID(id: any): Observable<nhanvien[]> {
    return this.http.get<nhanvien[]>(`${this.API_URL}/NhanViens/${id}`);
  }
  addnv(val: any){
    return this.http.post(this.API_URL + '/NhanViens', val);
  }
  editnv(id: any, val: any){
    return this.http.put(this.API_URL + '/NhanViens/' + id, val);
  }
  deletenv(id: any){
    return this.http.delete(this.API_URL + '/NhanViens/' + id);
  }

  //nhà cung cấp
  GetAllncc() {
    return this.http.get(`${this.API_URL}/NhaCungCaps`);
  }
  GetnccID(id: any): Observable<nhacungcap[]> {
    return this.http.get<nhacungcap[]>(`${this.API_URL}/NhaCungCaps/${id}`);
  }
  addncc(val: any){
    return this.http.post(this.API_URL + '/NhaCungCaps', val);
  }
  editncc(id: any, val: any){
    return this.http.put(this.API_URL + '/NhaCungCaps/' + id, val);
  }
  deletencc(id: any){
    return this.http.delete(this.API_URL + '/NhaCungCaps/' + id);
  }

  //tin túc
  GetAlltintuc() {
    return this.http.get(`${this.API_URL}/TinTucs`);
  }
  GettinID(id: any): Observable<tintuc[]> {
    return this.http.get<tintuc[]>(`${this.API_URL}/TinTucs/${id}`);
  }
  addtt(val: any){
    return this.http.post(this.API_URL + '/TinTucs', val);
  }
  edittt(id: any, val: any){
    return this.http.put(this.API_URL + '/TinTucs/' + id, val);
  }
  deletett(id: any){
    return this.http.delete(this.API_URL + '/TinTucs/' + id);
  }


  //tài khoản
  GetAllUser() {
    return this.http.get(`${this.API_URL}/Users`);
  }
  GetuserID(id: any): Observable<nhanvien[]> {
    return this.http.get<nhanvien[]>(`${this.API_URL}/Users/${id}`);
  }
  addus(val: user){
    return this.http.post(this.API_URL + '/Users', val);
  }
  editus(id: any, val: any){
    return this.http.put(this.API_URL + '/Users/' + id, val);
  }
  deleteus(id: any){
    return this.http.delete(this.API_URL + '/Users/' + id);
  }
  //đơn hàng
  GetAllDonhang() {
    return this.http.get(`${this.API_URL}/Donhangs`);
  }

  //hóa đơn nhập
  GetAllHDN() {
    return this.http.get(`${this.API_URL}/HoaDonNhaps`);
  }
}
