/* Navigasi tab, jenis pesanan, dan inisialisasi aplikasi. */
/* navigasi tab */
function go(view){
  state.view=view;
  if(view==="pesanan") renderPesanan();
  document.querySelectorAll(".view").forEach(v=>{const on=v.id==="v-"+view;v.hidden=!on;v.classList.remove("in");if(on){void v.offsetWidth;v.classList.add("in");v.scrollTop=0}});
  document.querySelectorAll(".tabs button").forEach(b=>{if(b.dataset.tab===view)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  $("#barTitle").textContent=TITLES[view];
  renderChrome();
}
function applyMode(){
  document.querySelectorAll("#mode button").forEach(b=>b.setAttribute("aria-checked",b.dataset.mode===state.mode));
  $("#modeHelp").textContent=MODES[state.mode].help;
  renderChips();renderMenu();
  renderChrome();
}

/* Jika foto gagal dimuat, kembali ke kotak huruf (daftar) atau sembunyikan (panel detail). */
document.addEventListener("error",e=>{
  const t=e.target;if(!t||t.tagName!=="IMG")return;
  if(t.classList.contains("photo")){const d=document.createElement("div");d.className="tile c"+t.dataset.k;d.setAttribute("aria-hidden","true");d.textContent=t.dataset.ini;t.replaceWith(d)}
  else if(t.hasAttribute("data-hero")) t.remove();
},true);

function init(){
  $("#yr").textContent=new Date().getFullYear();
  $("#iJam").textContent=`Setiap hari, ${pad(CONFIG.buka)}:00 – ${pad(CONFIG.tutup)}:00 WIB`;
  $("#iAlamat").textContent=CONFIG.alamat;
  $("#iWa").textContent=CONFIG.waTampil;
  $("#iIg").textContent="@"+CONFIG.ig;$("#iIg").href="https://www.instagram.com/"+CONFIG.ig;
  $("#iOngkir").textContent=`${rp(CONFIG.ongkir)} otomatis untuk pesanan di bawah ${rp(CONFIG.gratisDi)}. Gratis ongkir untuk pesanan ${rp(CONFIG.gratisDi)} ke atas.`;
  if(CONFIG.minimalAntar>0) $("#iMin").textContent=`${rp(CONFIG.minimalAntar)} untuk pesan antar`;
  else {$("#iMin").hidden=true;$("#iMin").previousElementSibling.hidden=true}

  const today=nowParts().date;
  const dOrder=defaultDate(true),dRes=defaultDate(false);
  state.form.tgl=dOrder;$("#rTgl").min=today;$("#rTgl").value=dRes;
  $("#rOrang").innerHTML=Array.from({length:20},(_,i)=>`<option value="${i+1}">${i+1} orang</option>`).join("");$("#rOrang").value="4";
  $("#rJam").innerHTML=slotOptions(dRes,false,"");
  $("#rTgl").addEventListener("change",()=>{$("#rJam").innerHTML=slotOptions($("#rTgl").value,false,$("#rJam").value)});
  const c=state.form;$("#rNama").value=c.nama;$("#rHp").value=c.hp;

  refreshCart();
  renderStatus();setInterval(renderStatus,60000);
  renderChips();renderMenu();applyMode();go("menu");

  document.addEventListener("click",e=>{
    const t=e.target.closest("button,[data-open]");if(!t)return;
    const d=t.dataset;
    if(d.tab) go(d.tab);
    else if(d.q){e.stopPropagation();quick(d.id,+d.q)}
    else if(d.cat){state.cat=d.cat;renderChips();renderMenu()}
    else if(d.mode){state.mode=d.mode;store.set("p234_mode",state.mode);applyMode();if(state.view==="pesanan")renderPesanan()}
    else if(d.bump){readOrderForm();bump(d.bump,+d.d)}
    else if(d.sq){sheetQty=Math.max(1,Math.min(50,sheetQty+ +d.sq));$("#sQty").textContent=sheetQty;$("#sPrice").textContent=rp(curPrice()*sheetQty)}
    else if(t.id==="sAdd"){addLine(sheetItem.id,sheetQty,sheetLevel,$("#sNote").value,sheetVariant,sheetUpg,sheetPart);toast(`${sheetItem.n} ditambahkan`);closeSheet()}
    else if(t.id==="barCartBtn") go("pesanan");
    else if(t.id==="oClear"){state.cart=[];afterCart();toast("Pesanan dikosongkan")}
    else if(t.id==="oCopy"){const er=validateOrder();$("#oErr").textContent=er;if(!er)copyText(orderMessage())}
    else if(t.id==="rCopy"){const er=validateRes();$("#rErr").textContent=er;if(!er)copyText(reservationMessage())}
    else if(d.open&&!e.target.closest("[data-stop]")) openItem(d.open);
  });
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&!$("#sheetWrap").hidden) closeSheet();
    if((e.key==="Enter"||e.key===" ")&&e.target.dataset&&e.target.dataset.open){e.preventDefault();openItem(e.target.dataset.open)}
  });
  document.addEventListener("change",e=>{
    if(e.target.name==="lv"){sheetLevel=e.target.value}
    if(e.target.name==="pt"){sheetPart=e.target.value}
    if(e.target.name==="un"){sheetUpg=e.target.value;$("#sPrice").textContent=rp(curPrice()*sheetQty)}
    if(e.target.name==="vr"){sheetVariant=e.target.value;$("#sPrice").textContent=rp(curPrice()*sheetQty)}
    if(e.target.id==="oTgl"){readOrderForm();$("#oJam").innerHTML=slotOptions(state.form.tgl,true,state.form.jam);readOrderForm()}
    if(state.view==="pesanan") readOrderForm();
  });
  document.addEventListener("input",e=>{ if(state.view==="pesanan"&&e.target.closest("#ordForm")) readOrderForm() });
  $("#q").addEventListener("input",e=>{state.q=e.target.value;renderMenu()});
  $("#backdrop").onclick=closeSheet;
  $("#resForm").addEventListener("submit",e=>e.preventDefault());
  document.addEventListener("submit",e=>e.preventDefault());

  /* link WhatsApp: pakai href asli, cegah jika data belum valid */
  document.addEventListener("click",e=>{
    const a=e.target.closest("#oSend,#rSend");if(!a)return;
    const order=a.id==="oSend",er=order?validateOrder():validateRes();
    $(order?"#oErr":"#rErr").textContent=er;
    if(er){e.preventDefault();return}
    a.href=waLink(order?orderMessage():reservationMessage());
    if(order) store.set("p234_cust",{n:state.form.nama,h:state.form.hp,a:state.form.alamat});
  });
}
init();
