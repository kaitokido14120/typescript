import { SanPham } from './sanPham';
// {SanPham} là tên lớp đối tượng  from './ts/sanPham' tên đường dẫn đến file sanPham.js
import { DanhSachSanPham } from './danhSachSanPham';
import '../css/styles.css';
import '../scss/styles.scss';
import { Observable, of } from 'rxjs';

let dsSanPham = new DanhSachSanPham();
let x = of(dsSanPham);
function ThemSanPham() {

    let sp: SanPham = new SanPham();
    sp.MaSanPham = 1;
    sp.TenSanPham = 'tên sản phẩm';
    sp.Gia = 10000;
    dsSanPham.ThemSanPham(sp);
    x.pipe();
}


x.subscribe((data)=>{
    console.log(data.mangSanPham);
    for(var item of data.mangSanPham)
    {
        alert(item);
        document.getElementById("div1").innerHTML +=  item.TenSanPham;
    }
})
document.getElementById("btnClick").addEventListener("click", ThemSanPham);

console.log(dsSanPham);


