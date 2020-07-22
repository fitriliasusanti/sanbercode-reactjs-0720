// SOAL NOMER 1 //
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var capitalize = kataKetiga.charAt(0).toUpperCase()+ 
kataKetiga.slice(1);
var uppercase  = kataKeempat.toUpperCase();

var result = kataPertama.concat(" ").concat(kataKedua).concat(" ").concat(capitalize).concat(" ").concat(uppercase);
console.log(result); 

// SOAL NOMER 2 //
var kataPertama = 1;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 5;

var result = kataPertama + kataKedua + kataKetiga + kataKeempat;
console.log(result); 

// SOAL NOMER 3 //
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga  = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima= kalimat.substring(25); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// SOAL NOMER 4 //
var nilai = 49;

if(nilai >= 80){
    result = "Nilai A";
 } else if (nilai <80  && nilai >= 70) {
    result = "Niai B";
 } else if (nilai <70  && nilai >= 60) {
    result = "Niai C";
 } else if (nilai <60  && nilai >= 50) {
    result = "Niai D";
 } else {
     result = "Nilai E";
 }

 console.log(result); 

 // SOAL NOMER 5
var tanggal = "21";
var bulan = 2;
var tahun = "1996";

var namaBulan;
      switch(bulan)
      {
        case 1:
          namaBulan="Januari";
          break;
        case 2:
          namaBulan="Februari";
          break;
        case 3:
          namaBulan="Maret";
          break;
        case 4:
          namaBulan="April";
          break;
        case 5:
          namaBulan="Mei";
          break;
        case 6:
          namaBulan="Juni";
          break;
        case 7:
          namaBulan="Juli";
          break;
        case 8:
            namaBulan="Agustus";
          break;
        case 9:
            namaBulan="September";
          break;
        case 10:
            namaBulan="Oktober";
          break;
        case 11:
            namaBulan="November";
          break;
        case 12:
            namaBulan="Desember";
          break;
        default:
            namaBulan="Invalid namaBulan";
      }

var result = tanggal.concat(" ").concat(namaBulan).concat(" ").concat(tahun);
console.log(result);
