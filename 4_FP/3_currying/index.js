//contoh currying

let sayMyName = (firstName) => (secondName) => `${firstName} ${secondName}`
let sayNabil = sayMyName("Nabil") //return adalah function()
//hal ini dikarenakan operasi belum selesai

console.log(sayNabil("Izzullah"))
//return dari console.log diatas sudah tidak function