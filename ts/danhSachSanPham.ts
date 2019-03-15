import { SanPham } from "./sanPham";

export class DanhSachSanPham {
    public mangSanPham: SanPham[] = [];
    constructor() { }
    public ThemSanPham(sanPham: SanPham): void {
        this.mangSanPham.push(sanPham);
    }
    public XoaSanPham(MaSP: number): void {
        for(let i=0;i<this.mangSanPham.length ;i--)
        {
            if(this.mangSanPham[i].MaSanPham === MaSP)
            {
                this.mangSanPham.splice(i,1);
            }

        }
    }
}