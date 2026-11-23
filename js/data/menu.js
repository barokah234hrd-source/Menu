/* Data menu. Tambah atau ubah menu di sini. Harga dalam rupiah. */
/* s:1 = ada pilihan tingkat pedas (tumisan); pt:1 = pilihan bagian paha/dada; v = pilihan varian dengan harga masing-masing; t = favorit (bertanda bintang di daftar menu) */
const UPG = [{n:"Nasi putih",p:0},{n:"Nasi Daun Jeruk",p:2000},{n:"Nasi Liwet Sunda",p:2000}];
const MENU = [
  {c:"Nasi Kotak",k:1,dineIn:false,sub:"Khusus antar dan ambil, bukan makan di tempat.",promo:"Beli 25 box, gratis 1 box atau voucher Rp 25.000.",items:[
    {id:"nk_broiler",img:"nk_broiler.webp",n:"Naskot Ayam Broiler",p:28000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:28000,img:"nk_broiler_0.webp"},{n:"Bakar",p:30000,img:"nk_broiler_1.webp"}],u:UPG},
    {id:"nk_pejantan",img:"nk_pejantan.webp",n:"Naskot Ayam Pejantan",p:34000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:34000,img:"nk_pejantan_0.webp"},{n:"Bakar",p:36000,img:"nk_pejantan_1.webp"}],u:UPG},
    {id:"nk_bebek",img:"nk_bebek.webp",n:"Naskot Bebek",p:43000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:43000,img:"nk_bebek_0.webp"},{n:"Bakar",p:44000,img:"nk_bebek_1.webp"}],u:UPG},
    {id:"nk_nila",img:"nk_nila.webp",n:"Naskot Nila",p:27000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:27000,img:"nk_nila_0.webp"},{n:"Bakar",p:28000,img:"nk_nila_1.webp"}],u:UPG},
    {id:"nk_lele",img:"nk_lele.webp",n:"Naskot Lele",p:26000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:26000,img:"nk_lele_0.webp"},{n:"Bakar",p:27000,img:"nk_lele_1.webp"}],u:UPG},
    {id:"nk_gurame",img:"nk_gurame.webp",n:"Naskot Gurame",p:40000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:40000,img:"nk_gurame_0.webp"},{n:"Bakar",p:41000,img:"nk_gurame_1.webp"}],u:UPG}
  ]},
  {c:"Ayam, Bebek & Ikan",k:0,sub:"Bakar atau goreng, disajikan dengan sambal",items:[
    {id:"ayambb",img:"ayambb.webp",n:"Ayam Broiler Bakar",p:22000,pt:1},
    {id:"ayambg",img:"ayambg.webp",n:"Ayam Broiler Goreng",p:20000,pt:1,t:"Favorit"},
    {id:"ayampb",img:"ayampb.webp",n:"Ayam Pejantan Bakar",p:27000,pt:1},
    {id:"ayampg",img:"ayampg.webp",n:"Ayam Pejantan Goreng",p:25000,pt:1,t:"Favorit"},
    {id:"bebekb",img:"bebekb.webp",n:"Bebek Bakar",p:36000,pt:1},
    {id:"bebekg",img:"bebekg.webp",n:"Bebek Goreng",p:35000,pt:1,t:"Favorit"},
    {id:"kepala",img:"kepala.webp",n:"Kepala Ayam Goreng",p:5000},
    {id:"leleb",img:"leleb.webp",n:"Lele Bakar",p:18000},
    {id:"lelegg",img:"lelegg.webp",n:"Lele Goreng",p:17000},
    {id:"nilab",img:"nilab.webp",n:"Nila Bakar",p:21000},
    {id:"nilag",img:"nilag.webp",n:"Nila Goreng",p:20000},
    {id:"gurame",img:"gurame.webp",n:"Gurame",p:32000}
  ]},
  {c:"Pepes & Ikan Asin",k:3,sub:"Pepes dan lauk asin",items:[
    {id:"pepesa",img:"pepesa.webp",n:"Pepes Ayam",p:25000},
    {id:"pepest",img:"pepest.webp",n:"Pepes Tahu",p:8000},
    {id:"pepesteri",n:"Pepes Teri",p:15000},
    {id:"pepesu",n:"Pepes Usus",p:10000},
    {id:"peda",n:"Peda Merah",p:10000},
    {id:"layur",img:"layur.webp",n:"Layur Asin",p:12000},
    {id:"jambal",n:"Asin Jambal",p:18000},
    {id:"asincumi",n:"Asin Cumi",p:17000}
  ]},
  {c:"Sayur",k:1,sub:"Tumis, goreng, dan sayur berkuah",items:[
    {id:"brokoli",img:"brokoli.webp",n:"Brokoli",p:23000,s:1,v:[{n:"Tumis",p:23000,img:"brokoli_0.webp"},{n:"Goreng",p:23000,img:"brokoli_1.webp"}]},
    {id:"capcay",img:"capcay.webp",n:"Capcay",p:20000,s:1},
    {id:"jukut",img:"jukut.webp",n:"Jukut Goreng",p:10000,t:"Favorit"},
    {id:"kangkungg",img:"kangkungg.webp",n:"Kangkung Goreng",p:10000},
    {id:"kangkungt",img:"kangkungt.webp",n:"Kangkung Tumis",p:15000,s:1,t:"Favorit"},
    {id:"genjer",img:"genjer.webp",n:"Tumis Genjer",p:15000,s:1},
    {id:"kol",img:"kol.webp",n:"Kol Goreng",p:8000},
    {id:"peteg",img:"peteg.webp",n:"Pete Goreng",p:15000},
    {id:"peteb",img:"peteb.webp",n:"Pete Balado",p:20000,t:"Favorit"},
    {id:"asem",img:"asem.webp",n:"Sayur Asem",p:8000},
    {id:"terongb",img:"terongb.webp",n:"Terong Bakar",p:10000},
    {id:"terongbl",img:"terongbl.webp",n:"Terong Balado",p:15000,t:"Favorit"},
    {id:"terongg",img:"terongg.webp",n:"Terong Goreng",p:10000},
    {id:"taugeg",img:"taugeg.webp",n:"Tauge Goreng",p:10000},
    {id:"taugett",img:"taugett.webp",n:"Tauge Tumis",p:15000,s:1}
  ]},
  {c:"Telur, Tahu & Tempe",k:2,sub:"Pelengkap makan",items:[
    {id:"telurasin",img:"telurasin.webp",n:"Telur Asin",p:7000},
    {id:"telurac",img:"telurac.webp",n:"Telur Ayam Ceplok",p:5000},
    {id:"telurad",img:"telurad.webp",n:"Telur Ayam Dadar",p:7000},
    {id:"telurbc",img:"telurbc.webp",n:"Telur Bebek Ceplok",p:7000},
    {id:"telurbd",img:"telurbd.webp",n:"Telur Bebek Dadar",p:9000},
    {id:"tahub",img:"tahub.webp",n:"Tahu Bacem",p:6000},
    {id:"tahug",img:"tahug.webp",n:"Tahu",p:4000,v:[{n:"Goreng",p:4000,img:"tahug_0.webp"},{n:"Krispi",p:4000,img:"tahug_1.webp"}]},
    {id:"tempeb",img:"tempeb.webp",n:"Tempe Bacem",p:6000},
    {id:"tempeg",img:"tempeg.webp",n:"Tempe Goreng",p:4000},
    {id:"bakwan",img:"bakwan.webp",n:"Bakwan Jagung",p:3000},
    {id:"perkedel",n:"Perkedel Kentang",p:6000},
    {id:"kerupuk",n:"Kerupuk",p:4000}
  ]},
  {c:"Aneka Sate",k:0,sub:"Sate per tusuk",items:[
    {id:"satea",img:"satea.webp",n:"Sate Ati Ampela",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}]},
    {id:"satebab",img:"satebab.webp",n:"Sate Babat",p:13000,v:[{n:"Bakar",p:13000},{n:"Goreng",p:13000}]},
    {id:"satecumi",img:"satecumi.webp",n:"Sate Cumi",p:24000,v:[{n:"Bakar",p:24000},{n:"Goreng",p:24000}]},
    {id:"satekulit",img:"satekulit.webp",n:"Sate Kulit",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}],t:"Favorit"},
    {id:"sateparu",img:"sateparu.webp",n:"Sate Paru",p:13000,v:[{n:"Bakar",p:13000},{n:"Goreng",p:13000}]},
    {id:"satetelur",img:"satetelur.webp",n:"Sate Telur Puyuh",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}]},
    {id:"sateudang",img:"sateudang.webp",n:"Sate Udang",p:20000,v:[{n:"Bakar",p:20000},{n:"Goreng",p:20000}]},
    {id:"sateusus",img:"sateusus.webp",n:"Sate Usus",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}],t:"Favorit"}
  ]},
  {c:"Nasi",k:2,sub:"Nasi hangat",items:[
    {id:"nasi",img:"nasi.webp",n:"Nasi Putih",p:8000},
    {id:"liwet",img:"liwet.webp",n:"Nasi Liwet Sunda",p:10000},
    {id:"daunjeruk",img:"daunjeruk.webp",n:"Nasi Daun Jeruk",p:10000,t:"Favorit"}
  ]},
  {c:"Minuman",k:3,sub:"Dingin dan menyegarkan",items:[
    {id:"teler",img:"teler.webp",n:"Es Teler",p:20000,t:"Favorit"},
    {id:"oyen",img:"oyen.webp",n:"Es Oyen",p:20000},
    {id:"kuwut",img:"kuwut.webp",n:"Es Kuwut",p:16000,v:[{n:"Melon",p:16000,img:"kuwut_0.webp"},{n:"Cocopandan",p:16000,img:"kuwut_1.webp"}]},
    {id:"leci",img:"leci.webp",n:"Leci Tea",p:18000},
    {id:"lidah",img:"lidah.webp",n:"Lidah Buaya",p:16000,v:[{n:"Lemon",p:16000,img:"lidah_0.webp"},{n:"Cocopandan",p:16000,img:"lidah_1.webp"}]},
    {id:"jeruk",img:"jeruk.webp",n:"Jeruk",p:13000,v:[{n:"Jeruk Peras",p:15000,img:"jeruk_0.webp"},{n:"Jeruk Nipis",p:13000,img:"jeruk_1.webp"}]},
    {id:"thai",img:"thai.webp",n:"Thai Tea",p:20000,v:[{n:"Milk Tea",p:20000,img:"thai_0.webp"},{n:"Green Tea",p:22000,img:"thai_1.webp"}]},
    {id:"lemon",img:"lemon.webp",n:"Lemon",p:12000,v:[{n:"Lemon Tea",p:12000,img:"lemon_0.webp"},{n:"Lemon Syrup",p:12000,img:"lemon_1.webp"}]},
    {id:"soda",img:"soda.webp",n:"Soda Gembira",p:18000},
    {id:"jus",img:"jus.webp",n:"Jus",p:18000,v:[{n:"Alpukat",p:18000,img:"jus_0.webp"},{n:"Strawberry",p:18000,img:"jus_1.webp"}]},
    {id:"yakult",img:"yakult.webp",n:"Orange Yakult",p:18000},
    {id:"tarik",img:"tarik.webp",n:"Teh Tarik",p:16000},
    {id:"susu",img:"susu.webp",n:"Susu",p:12000,v:[{n:"Cokelat",p:12000},{n:"Putih",p:12000}]},
    {id:"kopi",img:"kopi.webp",n:"Kopi",p:12000},
    {id:"mineral",img:"mineral.webp",n:"Mineral",p:7000},
    {id:"tehmanis",img:"tehmanis.webp",n:"Teh Manis",p:6000},
    {id:"tehtawar",img:"tehtawar.webp",n:"Teh Tawar",p:2000}
  ]}
];
const ALL = MENU.flatMap(g=>g.items.map(i=>({...i,c:g.c,k:g.k,noDine:g.dineIn===false,p:i.v?Math.min(...i.v.map(x=>x.p)):i.p})));
const BY = Object.fromEntries(ALL.map(i=>[i.id,i]));
