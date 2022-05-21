// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// let fetchData = (url, isAsync = true) => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open("GET", url, isAsync)
//         xhr.onload = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 resolve(xhr.responseText)
//             }
//             else {
//                 reject(xhr.status)
//             }
//         }
//         xhr.send()
//     })
// }
// fetchData("https://jsonplaceholder.typicode.com/tods/")
//     .then(response => JSON.parse(response))
//     .then(response => console.log(response))
//     .catch(response => console.log(response))
//     .finally(() => console.log("selesai"))


let humanObj = {
    name: {
        fname: undefined,
        lname: "Izzullah"
    }
}

console.log(humanObj?.name2?.test)
