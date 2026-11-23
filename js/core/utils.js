/* Fungsi bantu: format rupiah, penyimpanan lokal, waktu Jakarta, jam tersedia, dan notifikasi. */
const $ = s => document.querySelector(s);
const rp = n => "Rp " + new Intl.NumberFormat("id-ID").format(n);
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad = n => String(n).padStart(2,"0");
const store = {
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
/* waktu Jakarta */
function nowParts(){
  const f=new Intl.DateTimeFormat("en-CA",{timeZone:CONFIG.zona,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false});
  const p=Object.fromEntries(f.formatToParts(new Date()).map(x=>[x.type,x.value]));
  return {date:`${p.year}-${p.month}-${p.day}`,h:+p.hour%24,m:+p.minute};
}
const isOpenNow=()=>{const t=nowParts();return t.h>=CONFIG.buka&&t.h<CONFIG.tutup};
function renderStatus(){
  const t=nowParts(),open=isOpenNow(),el=$("#status");
  el.className="pill"+(open?" open":"");
  $("#statusText").textContent = open?`Buka · tutup ${pad(CONFIG.tutup)}:00`:(t.h<CONFIG.buka?`Tutup · buka ${pad(CONFIG.buka)}:00`:`Tutup · buka besok ${pad(CONFIG.buka)}:00`);
}
function slots(dateStr,allowNow){
  const t=nowParts(),out=[];
  if(allowNow&&dateStr===t.date&&isOpenNow()) out.push("Secepatnya");
  for(let h=CONFIG.buka;h<CONFIG.tutup;h++) for(const m of [0,30]){
    if(dateStr===t.date&&(h*60+m)<(t.h*60+t.m+30)) continue;
    out.push(`${pad(h)}:${pad(m)}`);
  }
  return out;
}
function addDays(dateStr,n){const d=new Date(dateStr+"T00:00:00Z");d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)}
function defaultDate(allowNow){const t=nowParts().date;return slots(t,allowNow).length?t:addDays(t,1)}
function slotOptions(dateStr,allowNow,sel){
  const s=slots(dateStr,allowNow);
  if(!s.length) return `<option value="">Tidak ada jam tersisa</option>`;
  const cur=s.includes(sel)?sel:s[0];
  return s.map(v=>`<option value="${v}"${v===cur?" selected":""}>${v}</option>`).join("");
}
function dateLabel(d){
  try{return new Intl.DateTimeFormat("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(d+"T00:00:00Z"))}catch(e){return d}
}
let tt;function toast(m){const t=$("#toast");t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2200)}
