/* Tampilan daftar menu, filter kategori, dan panel detail item. */
/* menu */
const priceLabel=it=>{if(it.v){const ps=it.v.map(x=>x.p),lo=Math.min(...ps),hi=Math.max(...ps);return lo===hi?rp(lo):`${rp(lo)} – ${new Intl.NumberFormat("id-ID").format(hi)}`}return rp(it.p)};
const heat=h=>h?`<span class="heat" role="img" aria-label="Pedas ${h} dari 3">${[1,2,3].map(i=>`<i class="${i<=h?"on":""}"></i>`).join("")}</span>`:"";
/* Foto menu: file ada di images/menu/. IMG_INLINE hanya diisi pada versi pratinjau satu file. */
const imgSrc=f=>(window.IMG_INLINE&&window.IMG_INLINE[f])||("images/menu/"+encodeURIComponent(f));
const tileHtml=(it,k,size)=>it.img
  ? `<img class="tile photo" src="${imgSrc(it.img)}" alt="" width="${size}" height="${size}" loading="lazy" decoding="async" data-k="${k}" data-ini="${esc(initials(it.n))}">`
  : `<div class="tile c${k}" aria-hidden="true">${initials(it.n)}</div>`;
const initials=n=>n.replace(/^Naskot\s+/,"").replace(/\(.*\)/,"").trim().split(/\s+/).slice(0,2).map(w=>w[0]).join("").toUpperCase();
function renderChips(){
  if(state.cat!=="Semua"&&state.cat!=="Favorit"&&!menuGroups().some(g=>g.c===state.cat)) state.cat="Semua";
  $("#chips").innerHTML=["Semua","Favorit",...menuGroups().map(g=>g.c)].map(c=>`<button class="chip" type="button" data-cat="${esc(c)}" aria-pressed="${state.cat===c}">${esc(c)}</button>`).join("");
}
function itemAction(it){
  const q=qtyOf(it.id);
  return q?`<div class="stepper" data-stop><button type="button" data-q="-1" data-id="${it.id}" aria-label="Kurangi ${esc(it.n)}">−</button><output>${q}</output><button type="button" data-q="1" data-id="${it.id}" aria-label="Tambah ${esc(it.n)}">+</button></div>`
    :`<button class="plus" type="button" data-q="1" data-id="${it.id}" aria-label="Tambah ${esc(it.n)}">+</button>`;
}
function renderMenu(){
  const q=state.q.trim().toLowerCase();let html="",count=0;
  for(const g of menuGroups()){
    if(state.cat!=="Semua"&&state.cat!=="Favorit"&&state.cat!==g.c) continue;
    const its=g.items.filter(i=>(state.cat!=="Favorit"||i.t)&&(!q||(i.n+" "+(i.v?i.v.map(x=>x.n).join(" "):"")+" "+g.c).toLowerCase().includes(q)));
    if(!its.length) continue;count+=its.length;
    html+=`<div class="cat"><h2>${g.c}</h2><p class="sub">${g.sub}</p>${g.promo?`<div class="promo">${g.promo}</div>`:""}`+its.map(it=>`
      <article class="item" data-open="${it.id}" role="button" tabindex="0" aria-label="Detail ${esc(it.n)}">
        ${tileHtml(it,g.k,60)}
        <div class="tx"><h3>${esc(it.n)}</h3>${it.d?`<p class="desc">${esc(it.d)}</p>`:(it.v?`<p class="desc">${esc(it.v.map(x=>x.n).join(", "))}</p>`:"")}
          <div class="meta"><span class="price">${priceLabel(it)}</span>${heat(it.h)}${it.t?`<span class="tag">★ ${it.t}</span>`:""}</div></div>
        <div>${itemAction(it)}</div>
      </article>`).join("")+`</div>`;
  }
  $("#menuList").innerHTML=count?html:`<p class="empty">Menu tidak ditemukan. Coba kata kunci lain, misalnya "ayam" atau "es".</p>`;
}

/* panel detail menu */
let sheetItem=null,sheetQty=1,sheetLevel="Sedang",sheetVariant="",sheetUpg="",sheetPart="Paha";
const curPrice=()=>priceOfVariant(sheetItem,sheetVariant)+upgPrice(sheetItem,sheetUpg);
function openItem(id){
  sheetItem=BY[id];sheetQty=1;sheetLevel="Sedang";sheetVariant=sheetItem.v?sheetItem.v[0].n:"";sheetUpg=sheetItem.u?sheetItem.u[0].n:"";sheetPart="Paha";renderItemSheet();showSheet();
}
function renderItemSheet(){
  const it=sheetItem;
  $("#sheet").innerHTML=`<div class="grab"></div>
    ${it.img?`<img class="hero-photo" src="${imgSrc((it.v&&(it.v.find(x=>x.n===sheetVariant)||{}).img)||it.img)}" alt="Foto ${esc(it.n)}" width="640" height="400" decoding="async" data-hero>`:""}
    <div style="display:flex;gap:14px;align-items:center">${it.img?"":`<div class="tile c${it.k}" style="width:72px;height:72px;font-size:1.5rem" aria-hidden="true">${initials(it.n)}</div>`}
      <div style="min-width:0"><h2 id="sheetTitle">${esc(it.n)}</h2><div class="meta" style="display:flex;gap:8px;align-items:center;margin-top:6px"><span class="price" id="sPriceHead">${priceLabel(it)}</span>${heat(it.h)}${it.t?`<span class="tag">★ ${it.t}</span>`:""}</div></div></div>
    ${it.d?`<p class="hint" style="font-size:.95rem">${esc(it.d)}</p>`:""}
    ${it.v?`<div class="field"><span class="lb" id="vrLb">Pilihan</span><div class="lv" role="radiogroup" aria-labelledby="vrLb">${it.v.map(v=>`<label><input type="radio" name="vr" value="${esc(v.n)}"${v.n===sheetVariant?" checked":""}>${esc(v.n)}${new Set(it.v.map(x=>x.p)).size>1?`<br><small>${rp(v.p)}</small>`:""}</label>`).join("")}</div></div>`:""}
    ${it.pt?`<div class="field"><span class="lb" id="ptLb">Bagian</span><div class="lv" role="radiogroup" aria-labelledby="ptLb">${["Paha","Dada"].map(v=>`<label><input type="radio" name="pt" value="${v}"${v===sheetPart?" checked":""}>${v}</label>`).join("")}</div></div>`:""}
    ${it.u?`<div class="field"><span class="lb" id="unLb">Upgrade nasi</span><div class="lv" role="radiogroup" aria-labelledby="unLb">${it.u.map(v=>`<label><input type="radio" name="un" value="${esc(v.n)}"${v.n===sheetUpg?" checked":""}>${esc(v.n)}${v.p?`<br><small>+${rp(v.p)}</small>`:""}</label>`).join("")}</div></div>`:""}
    ${it.s?`<div class="field"><span class="lb" id="lvLb">Tingkat pedas</span><div class="lv" role="radiogroup" aria-labelledby="lvLb">${LEVELS.map(v=>`<label><input type="radio" name="lv" value="${v}"${v===sheetLevel?" checked":""}>${v}</label>`).join("")}</div></div>`:""}
    <div class="field"><label for="sNote">Catatan</label><input id="sNote" maxlength="80" placeholder="Misalnya pilihan sambal atau sambal dipisah"></div>
    <div class="cta"><div class="stepper"><button type="button" data-sq="-1" aria-label="Kurangi">−</button><output id="sQty">${sheetQty}</output><button type="button" data-sq="1" aria-label="Tambah">+</button></div>
    <button class="btn primary" type="button" id="sAdd">Tambah · <span id="sPrice" style="margin-left:6px">${rp(curPrice()*sheetQty)}</span></button></div>`;
}
function showSheet(){$("#sheetWrap").hidden=false;const f=$("#sheet").querySelector("button,input");f&&f.focus()}
function closeSheet(){$("#sheetWrap").hidden=true;sheetItem=null}
