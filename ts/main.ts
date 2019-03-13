import {SanPham} from './sanPham';
// {SanPham} là tên lớp đối tượng  from './ts/sanPham' tên đường dẫn đến file sanPham.js
import {DanhSachSanPham} from './danhSachSanPham';
import '../css/styles.css';
import '../scss/styles.scss';

let sp:SanPham = new SanPham();
sp.MaSanPham = 1;
sp.TenSanPham = 'tên sản phẩm';
sp.Gia = 10000;

let dsSanPham = new DanhSachSanPham();
dsSanPham.ThemSanPham(sp);

