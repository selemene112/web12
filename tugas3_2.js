// Perulangan adalah konsep dasar dalam pemograman yang digunakan untuk mengulangi serangkaian structur atau block kode secara berulang - ulang hingga memenuhi kondisi tertentu.
// Contoh Dari For
console.log('Perulangan For');
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// Contoh dari while
console.log('perulangan While');
var e = 0;
while (e < 5) {
  console.log(e);
  e++;
}

//Contoh Perulangan Do while
console.log('Perulangan Do while');
var j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// SOAL NO 2
// Buat Program perulangan 20 sampai 15
console.log('SOAL NO 2');
for (var q = 20; q >= 15; --q) {
  console.log(q);
}

//SOAL NO 3
console.log('SOAL NO 3');
for (var c = 1; c <= 15; c++) {
  if (c % 3 === 0 && c % 5 === 0) {
    console.log('fazztrack');
  } else if (c % 3 === 0) {
    console.log('fazz');
  } else if (c % 5 === 0) {
    console.log('track');
  } else {
    console.log(c);
  }
}
