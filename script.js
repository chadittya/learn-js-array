// manipulasi array
var arr = ["a", 1, true];

console.log(arr);

// menambah isi array
var arr1 = [];
arr1[0] = "Galih";
arr1[1] = "arizza";

console.log(arr1);

// menghapus isi array
var arr2 = ["galih", "arizza", "candra"];
arr2[1] = undefined;

console.log(arr2);

// menampilkan isi array
var arr3 = ["galih", "arizza", "candra", "aditya", "dimas"];

for (var i = 0; i < arr3.length; i++) {
  console.log("Nama saya ke-" + (i + 1) + " : " + arr3[i]);
}

// method pada array
// 1. join
var arrJoin = ["galih", "arizza", "candra"];
console.log(arrJoin.join("-"));

// 2. push & pop
arrJoin.push("adittya"); //menambahkan element diakhir pada array
arr3.pop(); //menghapus 1 element diahkir array

console.log(arrJoin.join("-"));
console.log(arr3);

// 3. unshift & shift
arrJoin.unshift("awalan"); //menambah element diawal array
console.log(arrJoin.join("-"));

arr3.shift();

console.log(arr3);

// 4. slice & splice
// formula splice(indexAwal, mauDiHapusBerapa, elemenBaru, elemenBaru2 ...)

arrJoin.splice(2, 0, "elementBaru", "elementBaru2");
console.log(arrJoin.join(" - "));

arrJoin.splice(1, 1, "TestHapus");
console.log(arrJoin.join(" - "));

// slice(awal, akhir)
var arrBaru = ["Ines", "Firdausi", "Galih", "Arizza", "Candra"];

var arrSlice = arrBaru.slice(1, 3);
console.log(arrSlice.join(" - "));

// 5. forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

angka.forEach(function (e) {
  console.log(e);
});

var names = ["galih", "arizza", "candra"];

names.forEach(function (e, i) {
  console.log("Mahasiswa ke- " + (i + 1) + " adalah : " + e);
});

// 6. map
var angka2 = angka.map(function (e) {
  return e * 2;
});

console.log(angka2.join(" - "));

// 7.sort
var angkaSort = [5, 3, 2, 7, 4, 9, 10, 30];
angkaSort.sort(function (a, b) {
  return a - b;
});
console.log(angkaSort.join(" - "));

// 8. filter
var angkaFilter = angkaSort.filter(function (x) {
  return x > 5;
});

console.log(angkaFilter);

var angkaFind = angkaSort.find(function (x) {
  return x > 5;
});

console.log(angkaFind);
