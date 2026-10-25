/* Konfigurasi toko, aturan ongkir, dan teks jenis pesanan. Ganti nilai di sini untuk mengubah info toko. */
/* ===== CONFIG: ganti sesuai data asli ===== */
const CONFIG = {
  nama: "Penyetan 234 Bandung",
  wa: "6281167051693",            // format internasional tanpa +
  waTampil: "0811 6705 1693",
  ig: "penyetan234.bandung",
  alamat: "Jl. K.H. Ahmad Dahlan No.66, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262",
  buka: 10, tutup: 22,
  ongkir: 10000, gratisDi: 150000, // ongkir otomatis Rp 10.000, gratis jika subtotal >= Rp 150.000
  minimalAntar: 0,                 // 0 = tidak ada minimal pesan
  zona: "Asia/Jakarta"
};
const LEVELS = ["Tidak pedas","Sedang","Pedas","Super pedas"];
const MODES = {
  antar:{help:"Ongkir Rp 10.000, gratis mulai Rp 150.000.",lTgl:"Tanggal antar",lJam:"Jam antar"},
  ambil:{help:"Pesan dulu, ambil di toko. Tanpa ongkir.",lTgl:"Tanggal ambil",lJam:"Jam ambil"},
  makan:{help:"Siap saat Anda tiba. Nasi kotak tidak tersedia.",lTgl:"Tanggal datang",lJam:"Jam datang"}
};
const MODE_NAME = {antar:"Pesan antar",ambil:"Ambil sendiri",makan:"Makan di tempat"};
const TITLES = {menu:"Penyetan 234",pesanan:"Pesanan",reservasi:"Reservasi",info:"Info toko"};
