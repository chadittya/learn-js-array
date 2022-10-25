// manipulasi array 
var arr = ['a', 1, true];

console.log(arr);

// menambah isi array 
var arr1 = [];
arr1[0] = 'Galih';
arr1[1] = 'arizza';

console.log(arr1);

// menghapus isi array 
var arr2 = ['galih', 'arizza', 'candra'];
arr2 [1] = undefined;

console.log(arr2);

// menampilkan isi array 
var arr3 = ['galih', 'arizza', 'candra', 'aditya', 'dimas'];

for (var i = 0; i< arr3.length; i++){
    console.log('Nama saya ke-'+(i+1)+' : ' + arr3[i]);
}

// method pada array 
// 1. join 
var arrJoin = ['galih', 'arizza', 'candra'];
console.log(arrJoin.join('-'));


// 2. push & pop 
arrJoin.push('adittya'); //menambahkan element diakhir pada array 
arr3.pop(); //menghapus 1 element diahkir array

console.log(arrJoin.join('-'));
console.log(arr3);

// 3. unshift & shift
arrJoin.unshift('awalan'); //menambah element diawal array
console.log(arrJoin.join('-'));

arr3.shift();

console.log(arr3);


