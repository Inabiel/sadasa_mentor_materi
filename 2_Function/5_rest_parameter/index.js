//rest parameter
//kita bisa mengirimkan nilai sebanyak-banyaknya pada satu rest parameter. Secara otomatis diubah menjadi array
//Hanya boleh satu kali setiap function, dan hanya boleh di parameter paling akhir.
//contoh
function sum(...args) {
    return args.reduce((init, val) => init + val)
}

console.log(sum(100, 200, 300, 400, 500, 600))

