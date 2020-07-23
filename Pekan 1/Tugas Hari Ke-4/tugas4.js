// SOAL NOMOR 1
console.log('--- SOAL NOMOR 1 ---');

console.log('--- LOOPING PERTAMA ---');
var nilaiAwal= 2;
var nilaiAkhir = 20;
while ( nilaiAwal <= 20) {
    if (nilaiAwal%2==0) {
        console.log(`${nilaiAwal} - I Love Coding`);
    }    
    nilaiAwal++;
}

console.log('--- LOOPING KEDUA ---');
while ( nilaiAkhir > 0) {
    if (nilaiAkhir%2==0) {
        console.log(`${nilaiAkhir} - I Love Coding`);
    }    
    nilaiAkhir--;
}

// SOAL NOMOR 2 
console.log('--- SOAL NOMOR 2 ---');

for (var angka = 1; angka <= 20; angka++) {
    if (angka%3==0 && angka%2==1) {        
        console.log(`${angka} - `);
    } else if (angka%2==0) {
        console.log(`${angka} - Berkualitas`);
    } else {
        console.log(`${angka} - Santai`);
    }
}


// SOAL NOMOR 3
console.log('--- SOAL NOMOR 3 ---');
var pagar = "";
for (var y=1; y<=7; y++) {    
    pagar +='#';
    console.log(pagar); 
}

// SOAL NOMOR 4
console.log('--- SOAL NOMOR 4 ---');
var kalimat= "saya sangat senang belajar javascript";
var kalimatArray = kalimat.split(" ");

console.log(kalimatArray);

// SOAL NOMOR 5
console.log('--- SOAL NOMOR 5 ---');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
console.log(daftarBuah);