import {SinhVien} from './SinhVien';
import {DanhSachSinhVien} from './DanhSachSinhVien';


var sv = new SinhVien();
sv.MaSV=1;
sv.HoTen = 'nguyễn văn a';
sv.Tuoi = 19;

var dsSinhVien = new DanhSachSinhVien();
dsSinhVien.themSinhVien(sv);
console.log(dsSinhVien);