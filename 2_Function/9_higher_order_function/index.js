//Higher order function
//Function yang menerima function lain sebagai argumen, atau function yang mengeluarkan function sebagai return value.
//contoh
function multiplier(factor) {
    return function (x) {
        return x ** factor
    }
}

let pangkatDua = multiplier(2)
let hasilPerkalian = pangkatDua(3)
console.log(hasilPerkalian)

//Bisa lebih singkat menggunakan arrow function
let arrowFuncMuliplier = (factor) => {
    return (x) => {
        return x * factor
    }
}

//Lebih singkat!

let evenShorterMultiplier = factor => x => x * factor