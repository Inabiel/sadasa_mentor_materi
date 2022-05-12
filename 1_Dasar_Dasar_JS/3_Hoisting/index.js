//Hoisting
//code dibawah akan diolah oleh engine javascript hingga menjadi code yang dicomment.
x = 10
var x
console.log(x)

// var x
// x = 10
// console.log(x)

//Apakah Hoisting dapat dilakukan menggunakan let/const?
//Tidak!
//Lihat Contoh dibawah
y = 15
let y
console.log(x)
//ReferenceError: Cannot access 'y' before initialization
