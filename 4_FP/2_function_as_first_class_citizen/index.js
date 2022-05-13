//contoh penggunaan map, filter, dan reduce

//di skenario ini, akan difilter angka diatas 9, lalu dijumlahkan, dan dibuat rata rata
let arr = [10, 9, 8, 20, 12, 33, 44]
    .filter((ele) => ele > 9) //oenggunaan filter, ele tersebut merupakan anonymous function
    .map((ele) => ele) //Penggunaan map
    .reduce((currentVal, nextVal) => currentVal + nextVal) //penggunaan reduce

console.log(arr)