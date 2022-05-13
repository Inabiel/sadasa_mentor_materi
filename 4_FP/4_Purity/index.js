//Function harusnya tidak memodifikasi luaran scope mereka
//Contoh

let urlToBeUsed = `initial url is https://jsonplaceholder.typicode.com/todos/1`

let changeUrl = (url) => {
    urlToBeUsed = url
} // Impure function!

let pureChangeUrl = url => {
    let urlToBeUsed = url
    return urlToBeUsed
} //Pure Function done the right way

console.log(urlToBeUsed)
console.log(pureChangeUrl("https://jsonplaceholder.typicode.com/todos/100 , doesnt change the initial value"))