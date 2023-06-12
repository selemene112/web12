// Cara membuat function yakni mengetikan
// function namafunc (Parameter_dari_fungsi{

// }
// yang atas adalah cara penulisan function

function salam(nama) {
  console.log('Halo ' + nama + ', Selamat Pagi');
  return nama;
}
salam('Muhammad Ariyanda');

function hitung_luas(panjang, lebar) {
  hasil = panjang * lebar;
  console.log('Luas Dari Persegi Panjang Adalah ' + hasil);
  return panjang * lebar;
}
hitung_luas(6, 5);
