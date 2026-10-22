/* Tampilan tab Pesanan: daftar item, ringkasan, dan form pengiriman. */
/* pesanan */
function renderPesanan(){
  const f=state.form,t=totals(),m=state.mode,M=MODES[m];
  if(!f.tgl||f.tgl<nowParts().date) f.tgl=defaultDate(true);
  if(!t.n){
    $("#pesananBody").innerHTML=`<div class="empty"><h2 style="font-size:1.3rem;color:var(--fg)">Pesanan masih kosong</h2><p style="margin-top:6px">Pilih menu dulu, lalu kembali ke sini untuk mengirim pesanan.</p><button class="btn primary" type="button" data-tab="menu">Lihat menu</button></div>`;
    return;
  }
  const lines=state.cart.map(l=>{const it=BY[l.id];return `<div class="line">
      <div><div class="nm">${esc(it.n)}</div><div class="opt">${esc([l.variant,l.part,l.upg&&l.upg!==UPG[0].n?"Upgrade: "+l.upg:"",l.level,l.note].filter(Boolean).join(" · "))}</div></div>
      <div class="stepper"><button type="button" data-bump="${esc(l.k)}" data-d="-1" aria-label="Kurangi ${esc(it.n)}">−</button><output>${l.qty}</output><button type="button" data-bump="${esc(l.k)}" data-d="1" aria-label="Tambah ${esc(it.n)}">+</button></div>
      <div class="opt">${rp(l.p)} × ${l.qty}</div><div class="sub" style="text-align:right">${rp(l.p*l.qty)}</div></div>`}).join("");
  const orangOpt=Array.from({length:12},(_,i)=>`<option value="${i+1}"${String(i+1)===f.orang?" selected":""}>${i+1} orang</option>`).join("");
  $("#pesananBody").innerHTML=`
    <div class="intro"><div><h2>Pesanan Anda</h2><p>${MODE_NAME[m]}. Ganti jenis pesanan di bagian atas.</p></div></div>
    ${lines}
    ${dineBlocked().length?`<div class="promo bad" role="alert" style="margin-top:10px">Nasi kotak tidak bisa dimakan di tempat. Hapus nasi kotak dari pesanan, atau ganti jenis pesanan ke Antar atau Ambil di tab Menu.</div>`:""}
    <div class="sum"><div><span>Subtotal</span><span>${rp(t.sub)}</span></div>
      ${m==="antar"?`<div><span>Ongkir${t.ong===0?" (gratis)":""}</span><span>${rp(t.ong)}</span></div>`:""}
      <div class="tot"><span>Total</span><span>${rp(t.tot)}</span></div></div>
    ${m==="antar"&&t.sub<CONFIG.gratisDi?`<p class="hint" style="margin-top:6px">Belanja ${rp(CONFIG.gratisDi-t.sub)} lagi untuk gratis ongkir.</p>`:""}
    ${kotakFree()?`<div class="promo" style="margin-top:10px">Promo nasi kotak: dapat ${kotakFree()} box gratis atau voucher Rp 25.000 per 25 box. Pilihannya dikonfirmasi lewat WhatsApp.</div>`:""}
    <form class="card" id="ordForm" novalidate>
      <div class="field"><label for="oNama">Nama</label><input id="oNama" autocomplete="name" value="${esc(f.nama)}"></div>
      <div class="field"><label for="oHp">Nomor WhatsApp</label><input id="oHp" inputmode="tel" autocomplete="tel" placeholder="08xxxxxxxxxx" value="${esc(f.hp)}"></div>
      ${m==="antar"?`<div class="field"><label for="oAlamat">Alamat antar</label><textarea id="oAlamat" autocomplete="street-address" placeholder="Jalan, nomor rumah, patokan">${esc(f.alamat)}</textarea></div>`:""}
      ${m==="makan"?`<div class="field"><label for="oOrang">Jumlah orang</label><select id="oOrang">${orangOpt}</select></div>`:""}
      <div class="row2">
        <div class="field"><label for="oTgl">${M.lTgl}</label><input id="oTgl" type="date" min="${nowParts().date}" value="${f.tgl}"></div>
        <div class="field"><label for="oJam">${M.lJam}</label><select id="oJam">${slotOptions(f.tgl,true,f.jam)}</select></div>
      </div>
      <div class="field"><span class="lb">Pembayaran</span><div class="pay">${["Tunai","Transfer","QRIS"].map(v=>`<label><input type="radio" name="bayar" value="${v}"${f.bayar===v?" checked":""}>${v}</label>`).join("")}</div></div>
      <div class="field"><label for="oCatatan">Catatan untuk pesanan</label><textarea id="oCatatan" placeholder="Misalnya tanpa sambal untuk anak">${esc(f.catatan)}</textarea></div>
      <p class="err" id="oErr" role="alert"></p>
      <div class="btns">
        <a class="btn primary" id="oSend" href="#" target="_blank" rel="noopener">Kirim pesanan lewat WhatsApp</a>
        <button type="button" class="btn ghost" id="oCopy">Salin pesan pesanan</button>
        <button type="button" class="btn ghost" id="oClear">Kosongkan pesanan</button>
      </div>
      <p class="hint">Pesanan baru diproses setelah kami membalas di WhatsApp. Total akhir dikonfirmasi oleh penjual.</p>
    </form>`;
}
