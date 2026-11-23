/* State aplikasi: tab aktif, jenis pesanan, kategori, keranjang, dan data form. */
let cartInit = store.get("p234_cart3",[]);
if(!Array.isArray(cartInit)) cartInit=[];
const state = { view:"menu", mode:MODES[store.get("p234_mode","antar")]?store.get("p234_mode","antar"):"antar", cat:"Semua", q:"", cart:cartInit.filter(l=>BY[l.id]&&typeof l.p==="number"),
  form:{tgl:"",jam:"",nama:"",hp:"",alamat:"",orang:"2",catatan:"",bayar:"Tunai"} };
const cust = store.get("p234_cust",null);
if(cust){state.form.nama=cust.n||"";state.form.hp=cust.h||"";state.form.alamat=cust.a||""}
