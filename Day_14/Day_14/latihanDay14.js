

var a = 1000    //jumlah penduduk awal
var b = 5/100   //persen penduduk melahirkan tiap tahunnya
var c = 50      //pendatang tiap tahunnya
var d = 1200    //target penduduk


var jumlahPendudukSekarang = 0

do {
var tumbuh = a + (b*a) + c
jumlahPendudukSekarang += tumbuh


} while (jumlahPendudukSekarang > d);

console.log(jumlahPendudukSekarang)