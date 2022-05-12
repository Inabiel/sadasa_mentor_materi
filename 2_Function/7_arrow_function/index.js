//Arrow Function
//Bentuk lebih sederhana dari function. 
//Jika hanya sebaris, tidak perlu menggunakan keyword return.

//Contoh
let guessANumber = (number) => {
    let correctNumber = Math.floor(Math.random() * 21);
    return correctNumber == number ? "Youre Correct!" : `Wrong. number is ${correctNumber}`
}

console.log(guessANumber(12))

