# Penyetan 234 Bandung: Web Pemesanan

Aplikasi pemesanan statis (HTML, CSS, JavaScript tanpa build). Pesanan dan reservasi dikirim lewat WhatsApp.

## Struktur

```
index.html            Kerangka halaman dan urutan pemuatan skrip
.gitignore, .editorconfig   Pengaturan repositori dan editor
netlify.toml          Pengaturan Netlify (folder publikasi dan header keamanan)
css/
  style.css           Semua gaya, warna tema, mode terang dan gelap
js/
  data/
    config.js         Info toko: nomor WhatsApp, alamat, jam buka, ongkir
    menu.js           Daftar menu, harga, varian, dan favorit
  core/
    utils.js          Format rupiah, penyimpanan lokal, waktu Jakarta, notifikasi
    state.js          State aplikasi
  features/
    cart.js           Keranjang dan perhitungan total
    menu-view.js      Daftar menu, filter, dan panel detail
    order-view.js     Tab Pesanan dan form pengiriman
    checkout.js       Validasi, pesan WhatsApp, salin pesan
  main.js             Navigasi tab dan inisialisasi
```

## Mengubah isi

- **Nomor WhatsApp, alamat, jam buka, ongkir:** `js/data/config.js`
- **Menu dan harga:** `js/data/menu.js`
  - `v` = pilihan varian dengan harga masing-masing (misalnya Goreng/Bakar)
  - `s: 1` = pilihan tingkat pedas (menu tumisan)
  - `pt: 1` = pilihan bagian paha/dada
  - `u` = upgrade nasi (nasi kotak)
  - `t: "Favorit"` = menu favorit
  - `dineIn: false` pada kategori = tidak tersedia untuk makan di tempat (dipakai Nasi Kotak)
- **Warna dan tampilan:** bagian token di awal `css/style.css`

## Palet warna

| Peran | Warna | Dipakai untuk |
| --- | --- | --- |
| Primer | `#2A6B50` hijau tua | Bilah atas, tombol kirim pesanan, pilihan aktif, tab aktif |
| Sekunder | `#CC2E35` merah | Tombol tambah (+), lencana jumlah, peringatan dan galat |
| Netral | `#FFFFFF` putih | Kartu, panel, dan form |
| Latar | `#F5F5F5` | Latar halaman |

Semua warna diatur sebagai token di awal `css/style.css`. Mode gelap memakai varian terang dari hijau dan merah agar tetap terbaca.

## Aturan ongkir

Ongkir Rp 10.000 untuk pesanan antar di bawah Rp 150.000, gratis untuk Rp 150.000 ke atas. Atur di `ongkir` dan `gratisDi` pada `config.js`.

## Deploy ke Netlify

Seret seluruh folder ini ke Netlify Drop, atau hubungkan repositori Git dengan folder publikasi `.` dan tanpa perintah build.

## Upload ke GitHub

```bash
cd penyetan234
git init
git add .
git commit -m "Web pemesanan Penyetan 234 Bandung"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Lalu di Netlify pilih "Import from Git", pilih repositori ini, kosongkan perintah build, dan isi folder publikasi dengan `.`. Setiap `git push` akan memperbarui situs otomatis.

Catatan: nomor WhatsApp dan alamat toko ada di `js/data/config.js`. Info ini sudah publik di situs, jadi aman jika repositori publik.
