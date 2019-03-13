import { SanPham } from "./sanPham";

export class DanhSachSanPham {
    public mangSanPham: SanPham[] = [];
    constructor() { }
    public ThemSanPham(sanPham: SanPham): void {
        this.mangSanPham.push(sanPham);
    }
}