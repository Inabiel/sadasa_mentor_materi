//IIFE
//IIFE (Immediately Invoked Function Expression), function yang memanggil dirinya sendiri.
//usecase: adalah untuk mencegah konflik variable.

//contoh
(() => {
    var a = 12
    console.log(a)
})();

(() => {
    var a = 13
    console.log(a)
})();

(() => {
    var a = 14
    console.log(a)
})();