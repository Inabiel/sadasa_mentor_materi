//Array
//nilai di dalam array bersifat bebas.
//kita bisa memasukkan string, boolean,number, dan tipe data lain dalam 1 array.
let arrayExample = [1, 2, 3, 4, 5, "String", true, undefined]

//jika ingin mengambil nilai, pakai square bracket [] dan index yang diinginkan.
//dalam kasus ini, jika ingin mengambil angka 3, maka tulis arrayExample[2], karena index dimulai dari 0.

let angkaTiga = arrayExample[2]

//Ada beberapa method bawaan dari array, contohnya filter(), every(), some(),unshift(), dan lain lain.
//berikut implementasi dari method diatas.
//filter()
let filteredArr = arrayExample.filter((ele) => typeof (ele) != 'string' &&
    typeof (ele) != 'undefined' && typeof (ele) !== 'boolean')
console.log(filteredArr)

//every(), return true jika seluruh elemen didalam array bersifat true, jika ada 1 false maka akan menjadi false
let everyArr = arrayExample.every((ele) => typeof (ele) == "number")
console.log(everyArr)

//some(),return true jika ada satu diantara seluruh elemen didalam array yang bersifat true.
let someArr = arrayExample.some((ele) => typeof (ele) == "number")
console.log(someArr)

//unshift(), menambahkan elemen di depan array
arrayExample.unshift(100)
console.log(arrayExample)


//Spread Operator
//Digunakan untuk mengopi nilai suatu array ke array lain.
//bisa juga digunakan sebagai parameter didalam function,
//agar parameter bisa sebanyak-banyaknya.
let arrayToBeAdded = ["distinct", "value"]
let combinedArray = [...arrayExample, ...arrayToBeAdded] //proses penggabungan array
console.log(combinedArray)

