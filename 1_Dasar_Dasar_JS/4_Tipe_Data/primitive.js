let checkType = (arr) => {
    return arr.map((ele) => console.log(typeof (ele)))
}
//Hiraukan code diatas.

//Contoh tipe data primitive, yang hanya menyimpan 1 nilai dalam satu variable
let num = 1
let str = "String"
let bool = true
let undef = undefined
let nullVar = null



checkType([num, str, bool, undef, nullVar])