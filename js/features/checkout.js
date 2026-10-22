/* Validasi form, pesan WhatsApp untuk pesanan dan reservasi, dan salin pesan. */
function readOrderForm(){
  const f=state.form,g=id=>document.getElementById(id);
  if(g("oNama")) f.nama=g("oNama").value;
  if(g("oHp")) f.hp=g("oHp").value;
  if(g("oAlamat")) f.alamat=g("oAlamat").value;
  if(g("oOrang")) f.orang=g("oOrang").value;
  if(g("oTgl")) f.tgl=g("oTgl").value;
  if(g("oJam")) f.jam=g("oJam").value;
  if(g("oCatatan")) f.catatan=g("oCatatan").value;
  const b=document.querySelector('input[name="bayar"]:checked');if(b) f.bayar=b.value;
}
function validPhone(v){return /^(\+?62|0)8[0-9]{7,12}$/.test(v.replace(/[\s-]/g,""))}
function validateOrder(){
  readOrderForm();const f=state.form,t=totals(),m=state.mode;
  if(!t.n) return "Pesanan masih kosong.";
  if(dineBlocked().length) return "Nasi kotak tidak bisa dimakan di tempat. Hapus dari pesanan atau ganti ke Antar atau Ambil.";
  if(!f.nama.trim()) return "Isi nama pemesan.";
  if(!validPhone(f.hp)) return "Nomor WhatsApp belum benar. Contoh: 081234567890.";
  if(m==="antar"&&!f.alamat.trim()) return "Isi alamat antar.";
  if(m==="antar"&&CONFIG.minimalAntar>0&&t.sub<CONFIG.minimalAntar) return `Minimal pesan antar ${rp(CONFIG.minimalAntar)}. Tambah ${rp(CONFIG.minimalAntar-t.sub)} lagi.`;
  if(!f.tgl) return "Pilih tanggal.";
  if(!f.jam) return "Pilih jam. Jika hari ini sudah tutup, pilih tanggal lain.";
  return "";
}
function orderMessage(){
  const f=state.form,t=totals(),m=state.mode;
  const L=[`*Pesanan ${CONFIG.nama}*`,`Jenis: ${MODE_NAME[m]}`,`Nama: ${f.nama.trim()}`,`WhatsApp: ${f.hp.trim()}`];
  if(m==="antar") L.push(`Alamat: ${f.alamat.trim()}`);
  if(m==="makan") L.push(`Jumlah orang: ${f.orang}`);
  L.push(`${MODES[m].lTgl}: ${dateLabel(f.tgl)}`,`${MODES[m].lJam}: ${f.jam}`,"","*Pesanan:*");
  for(const l of state.cart){const it=BY[l.id];
    L.push(`${l.qty}x ${it.n}${l.variant?` - ${l.variant}`:""}${l.part?` - ${l.part}`:""}${l.upg&&l.upg!==UPG[0].n?` + ${l.upg}`:""}${l.level?` (${l.level})`:""} = ${rp(l.p*l.qty)}${l.note?`\n   Catatan: ${l.note}`:""}`)}
  if(kotakFree()) L.push("",`Promo nasi kotak: ${kotakFree()} box gratis atau voucher Rp 25.000 (mohon konfirmasi pilihan)`);
  L.push("",`Subtotal: ${rp(t.sub)}`);
  if(m==="antar") L.push(`Ongkir: ${t.ong?rp(t.ong):"Gratis"}`);
  L.push(`*Total: ${rp(t.tot)}*`,`Pembayaran: ${f.bayar}`);
  if(f.catatan.trim()) L.push(`Catatan: ${f.catatan.trim()}`);
  return L.join("\n");
}
function reservationMessage(){
  const g=id=>$(id).value.trim();
  return [`*Reservasi ${CONFIG.nama}*`,`Nama: ${g("#rNama")}`,`WhatsApp: ${g("#rHp")}`,`Tanggal: ${dateLabel($("#rTgl").value)}`,`Jam datang: ${$("#rJam").value}`,`Jumlah orang: ${$("#rOrang").value}`,...(g("#rCatatan")?[`Catatan: ${g("#rCatatan")}`]:[])].join("\n");
}
function validateRes(){
  if(!$("#rNama").value.trim()) return "Isi nama.";
  if(!validPhone($("#rHp").value)) return "Nomor WhatsApp belum benar. Contoh: 081234567890.";
  if(!$("#rTgl").value) return "Pilih tanggal.";
  if(!$("#rJam").value) return "Pilih jam. Jika hari ini sudah tutup, pilih tanggal lain.";
  return "";
}
const waLink=t=>`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(t)}`;
async function copyText(text){
  try{await navigator.clipboard.writeText(text);toast("Pesan disalin")}
  catch(e){
    const ta=document.createElement("textarea");ta.value=text;ta.style.cssText="position:fixed;opacity:0";document.body.appendChild(ta);ta.select();
    let ok=false;try{ok=document.execCommand("copy")}catch(_){}ta.remove();toast(ok?"Pesan disalin":"Gagal menyalin, pilih dan salin manual");
  }
}
