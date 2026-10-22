/* Data menu. Tambah atau ubah menu di sini. Harga dalam rupiah. */
/* s:1 = ada pilihan tingkat pedas (tumisan); pt:1 = pilihan bagian paha/dada; v = pilihan varian dengan harga masing-masing; t = favorit (bertanda bintang di daftar menu) */
const UPG = [{n:"Nasi putih",p:0},{n:"Nasi Daun Jeruk",p:2000},{n:"Nasi Liwet Sunda",p:2000}];
const MENU = [
  {c:"Nasi Kotak",k:1,dineIn:false,sub:"Hanya untuk pesan antar dan ambil sendiri, tidak untuk makan di tempat. Isian bisa request sesuai budget.",promo:"Setiap pembelian 25 box gratis 1 box atau voucher Rp 25.000.",items:[
    {id:"nk_broiler",n:"Naskot Ayam Broiler",p:28000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:28000},{n:"Bakar",p:30000}],u:UPG},
    {id:"nk_pejantan",n:"Naskot Ayam Pejantan",p:34000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:34000},{n:"Bakar",p:36000}],u:UPG},
    {id:"nk_bebek",n:"Naskot Bebek",p:43000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:43000},{n:"Bakar",p:44000}],u:UPG},
    {id:"nk_nila",n:"Naskot Nila",p:27000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:27000},{n:"Bakar",p:28000}],u:UPG},
    {id:"nk_lele",n:"Naskot Lele",p:26000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:26000},{n:"Bakar",p:27000}],u:UPG},
    {id:"nk_gurame",n:"Naskot Gurame",p:40000,kotak:1,d:"Nasi putih, lauk utama, terong goreng, tahu goreng, jukut goreng, 2 pilihan sambal",v:[{n:"Goreng",p:40000},{n:"Bakar",p:41000}],u:UPG}
  ]},
  {c:"Ayam, Bebek & Ikan",k:0,sub:"Bakar atau goreng, disajikan dengan sambal",items:[
    {id:"ayambb",n:"Ayam Broiler Bakar",p:22000,pt:1},
    {id:"ayambg",n:"Ayam Broiler Goreng",p:20000,pt:1,t:"Favorit"},
    {id:"ayampb",n:"Ayam Pejantan Bakar",p:27000,pt:1},
    {id:"ayampg",n:"Ayam Pejantan Goreng",p:25000,pt:1,t:"Favorit"},
    {id:"bebekb",n:"Bebek Bakar",p:36000,pt:1},
    {id:"bebekg",n:"Bebek Goreng",p:35000,pt:1,t:"Favorit"},
    {id:"kepala",n:"Kepala Ayam Goreng",p:5000},
    {id:"leleb",n:"Lele Bakar",p:18000},
    {id:"lelegg",n:"Lele Goreng",p:17000},
    {id:"nilab",n:"Nila Bakar",p:21000},
    {id:"nilag",n:"Nila Goreng",p:20000},
    {id:"gurame",n:"Gurame",p:32000}
  ]},
  {c:"Pepes & Ikan Asin",k:3,sub:"Pepes dan lauk asin",items:[
    {id:"pepesa",n:"Pepes Ayam",p:25000},
    {id:"pepest",n:"Pepes Tahu",p:8000},
    {id:"pepesteri",n:"Pepes Teri",p:15000},
    {id:"pepesu",n:"Pepes Usus",p:10000},
    {id:"peda",n:"Peda Merah",p:10000},
    {id:"layur",n:"Layur Asin",p:12000},
    {id:"jambal",n:"Asin Jambal",p:18000},
    {id:"asincumi",n:"Asin Cumi",p:17000}
  ]},
  {c:"Sayur",k:1,sub:"Tumis, goreng, dan sayur berkuah",items:[
    {id:"brokoli",n:"Brokoli",p:23000,s:1,v:[{n:"Tumis",p:23000},{n:"Goreng",p:23000}]},
    {id:"capcay",n:"Capcay",p:20000,s:1},
    {id:"jukut",n:"Jukut Goreng",p:10000,t:"Favorit"},
    {id:"kangkungg",n:"Kangkung Goreng",p:10000},
    {id:"kangkungt",n:"Kangkung Tumis",p:15000,s:1,t:"Favorit"},
    {id:"genjer",n:"Tumis Genjer",p:15000,s:1},
    {id:"kol",n:"Kol Goreng",p:8000},
    {id:"peteg",n:"Pete Goreng",p:15000},
    {id:"peteb",n:"Pete Balado",p:20000,t:"Favorit"},
    {id:"asem",n:"Sayur Asem",p:8000},
    {id:"terongb",n:"Terong Bakar",p:10000},
    {id:"terongbl",n:"Terong Balado",p:15000,t:"Favorit"},
    {id:"terongg",n:"Terong Goreng",p:10000},
    {id:"taugeg",n:"Tauge Goreng",p:10000},
    {id:"taugett",n:"Tauge Tumis",p:15000,s:1}
  ]},
  {c:"Telur, Tahu & Tempe",k:2,sub:"Pelengkap makan",items:[
    {id:"telurasin",n:"Telur Asin",p:7000},
    {id:"telurac",n:"Telur Ayam Ceplok",p:5000},
    {id:"telurad",n:"Telur Ayam Dadar",p:7000},
    {id:"telurbc",n:"Telur Bebek Ceplok",p:7000},
    {id:"telurbd",n:"Telur Bebek Dadar",p:9000},
    {id:"tahub",n:"Tahu Bacem",p:6000},
    {id:"tahug",n:"Tahu",p:4000,v:[{n:"Goreng",p:4000},{n:"Krispi",p:4000}]},
    {id:"tempeb",n:"Tempe Bacem",p:6000},
    {id:"tempeg",n:"Tempe Goreng",p:4000},
    {id:"bakwan",n:"Bakwan Jagung",p:3000},
    {id:"perkedel",n:"Perkedel Kentang",p:6000},
    {id:"kerupuk",n:"Kerupuk",p:4000}
  ]},
  {c:"Aneka Sate",k:0,sub:"Sate per tusuk",items:[
    {id:"satea",n:"Sate Ati Ampela",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}]},
    {id:"satebab",n:"Sate Babat",p:13000,v:[{n:"Bakar",p:13000},{n:"Goreng",p:13000}]},
    {id:"satecumi",n:"Sate Cumi",p:24000,v:[{n:"Bakar",p:24000},{n:"Goreng",p:24000}]},
    {id:"satekulit",n:"Sate Kulit",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}],t:"Favorit"},
    {id:"sateparu",n:"Sate Paru",p:13000,v:[{n:"Bakar",p:13000},{n:"Goreng",p:13000}]},
    {id:"satetelur",n:"Sate Telur Puyuh",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}]},
    {id:"sateudang",n:"Sate Udang",p:20000,v:[{n:"Bakar",p:20000},{n:"Goreng",p:20000}]},
    {id:"sateusus",n:"Sate Usus",p:8000,v:[{n:"Bakar",p:8000},{n:"Goreng",p:8000}],t:"Favorit"}
  ]},
  {c:"Nasi",k:2,sub:"Nasi hangat",items:[
    {id:"nasi",n:"Nasi Putih",p:8000},
    {id:"liwet",n:"Nasi Liwet Sunda",p:10000},
    {id:"daunjeruk",n:"Nasi Daun Jeruk",p:10000,t:"Favorit"}
  ]},
  {c:"Minuman",k:3,sub:"Dingin dan menyegarkan",items:[
    {id:"teler",n:"Es Teler",p:20000,t:"Favorit"},
    {id:"oyen",n:"Es Oyen",p:20000},
    {id:"kuwut",n:"Es Kuwut",p:16000,v:[{n:"Melon",p:16000},{n:"Cocopandan",p:16000}]},
    {id:"leci",n:"Leci Tea",p:18000},
    {id:"lidah",n:"Lidah Buaya",p:16000,v:[{n:"Lemon",p:16000},{n:"Cocopandan",p:16000}]},
    {id:"jeruk",n:"Jeruk",p:13000,v:[{n:"Jeruk Peras",p:15000},{n:"Jeruk Nipis",p:13000}]},
    {id:"thai",n:"Thai Tea",p:20000,v:[{n:"Milk Tea",p:20000},{n:"Green Tea",p:22000}]},
    {id:"lemon",n:"Lemon",p:12000,v:[{n:"Lemon Tea",p:12000},{n:"Lemon Syrup",p:12000}]},
    {id:"soda",n:"Soda Gembira",p:18000},
    {id:"jus",n:"Jus",p:18000,v:[{n:"Alpukat",p:18000},{n:"Strawberry",p:18000}]},
    {id:"yakult",n:"Orange Yakult",p:18000},
    {id:"tarik",n:"Teh Tarik",p:16000},
    {id:"susu",n:"Susu",p:12000,v:[{n:"Cokelat",p:12000},{n:"Putih",p:12000}]},
    {id:"kopi",n:"Kopi",p:12000},
    {id:"mineral",n:"Mineral",p:7000},
    {id:"tehmanis",n:"Teh Manis",p:6000},
    {id:"tehtawar",n:"Teh Tawar",p:2000}
  ]}
];
const ALL = MENU.flatMap(g=>g.items.map(i=>({...i,c:g.c,k:g.k,noDine:g.dineIn===false,p:i.v?Math.min(...i.v.map(x=>x.p)):i.p})));
const BY = Object.fromEntries(ALL.map(i=>[i.id,i]));
