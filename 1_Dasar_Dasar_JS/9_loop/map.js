//map()
//Membuat Array baru berisi value dari array sebelumnya.
//contoh 
let arrayOfComplicatedNumber = [230134, 12384, 213455, 888999]
let processedArray = arrayOfComplicatedNumber.map((ele) => Math.sqrt(ele)) //Membuat array baru
console.log(arrayOfComplicatedNumber) //Array tidak terganti
console.log(processedArray)