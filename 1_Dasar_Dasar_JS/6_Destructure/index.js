//Destructure
//Untuk membongkar nilai-nilai dari array/object
//untuk contoh, disini kita akan membongkar nilai dari array yang berisi string
//kita juga bisa menggunakan spread operator didalam destructuring
let arrayToBeDestructured = ["some", "string", "to", "be", "destructured"]
let [firstString, secondString, thirdString, ...restOfString] = arrayToBeDestructured
//kita bisa memanggil nilai tersebut dari variable yang telah dibuat
console.log(firstString)
console.log(...restOfString)

//Contoh untuk objek
//untuk destructure objek, yang dipakai adalah curly bracket / kurung kurawal ({})
//Contoh dibawah
let student = {
    name: "Vincent",
    classes: "10A",
    avg: 75
}

let {name, classes, avg} = student
console.log(name, classes, avg)