/* Logika keranjang: tambah, kurangi, hitung subtotal, ongkir, dan total. */
/* keranjang */
const saveCart=()=>store.set("p234_cart3",state.cart);
const keyOf=(id,level,note,v,u,pr)=>`${id}|${level}|${note}|${v}|${u}|${pr}`;
const upgPrice=(it,un)=>{const x=it.u&&it.u.find(y=>y.n===un);return x?x.p:0};
const priceOfVariant=(it,vn)=>{const x=it.v&&it.v.find(y=>y.n===vn);return x?x.p:it.p};
const qtyOf=id=>state.cart.filter(l=>l.id===id).reduce((a,l)=>a+l.qty,0);
function addLine(id,qty,level,note,variant,upg,part){
  const it=BY[id],lv=it.s?level:"",nt=(note||"").trim(),vr=it.v?(variant||it.v[0].n):"",up=it.u?(upg||it.u[0].n):"",pr=it.pt?(part||"Paha"):"",k=keyOf(id,lv,nt,vr,up,pr);
  const ex=state.cart.find(l=>l.k===k);
  if(ex) ex.qty+=qty; else state.cart.push({k,id,qty,level:lv,note:nt,variant:vr,upg:up,part:pr,p:priceOfVariant(it,vr)+upgPrice(it,up)});
  afterCart();
}
function bump(k,d){
  const l=state.cart.find(x=>x.k===k);if(!l)return;
  l.qty+=d;if(l.qty<=0) state.cart=state.cart.filter(x=>x.k!==k);
  afterCart();
}
function quick(id,d){
  if(d>0){if(BY[id].v||BY[id].pt){openItem(id);return}addLine(id,1,"Sedang","");return}
  const ls=state.cart.filter(l=>l.id===id);if(ls.length) bump(ls[ls.length-1].k,-1);
}
function refreshCart(){
  state.cart=state.cart.filter(l=>{const it=BY[l.id];return !(l.variant&&!(it.v&&it.v.some(x=>x.n===l.variant)))&&!(l.upg&&it.u&&!it.u.some(x=>x.n===l.upg))});
  for(const l of state.cart){const it=BY[l.id];l.p=priceOfVariant(it,l.variant)+upgPrice(it,l.upg)}
  saveCart();
}
const kotakFree=()=>Math.floor(state.cart.filter(l=>BY[l.id].kotak).reduce((a,l)=>a+l.qty,0)/25);
const menuGroups=()=>MENU.filter(g=>!(state.mode==="makan"&&g.dineIn===false));
const dineBlocked=()=>state.mode==="makan"?state.cart.filter(l=>BY[l.id].noDine):[];
function totals(){
  let sub=0,n=0;
  for(const l of state.cart){sub+=l.p*l.qty;n+=l.qty}
  const ong=state.mode==="antar"&&sub>0?(sub>=CONFIG.gratisDi?0:CONFIG.ongkir):0;
  return {sub,n,ong,tot:sub+ong};
}
function afterCart(){
  saveCart();renderMenu();renderChrome();
  if(state.view==="pesanan") renderPesanan();
}
function renderChrome(){
  const t=totals();
  $("#tabBadge").hidden=!t.n;$("#tabBadge").textContent=t.n;
  $("#barMode").hidden=!(state.view==="menu"||state.view==="pesanan");
  $("#barCart").hidden=!(t.n>0&&state.view!=="pesanan");
  $("#bcCount").textContent=t.n;$("#bcTotal").textContent=rp(t.sub);
}
