//Global scope
var a = 2
if (a > 1) {
    var a = 3 //variable a menjadi global variable menggantikan a diatas.
}
console.log(a)

//Block Scoped
let a = 2
if (a > 1) {
    let a = 3 //variable a diatas tidak terganti dengan variable ini, karena variable ini ada di scope if()
}
console.log(a)

//Bagaimana cara mengganti isi dari variable?
let a = 2
if (a > 1) {
    a = 3 //Variable a disini menggantikan variable diatas, kenapa? karena disini a yang direfensikan adalah a diatas, bukan variable sendiri
}
console.log(a)