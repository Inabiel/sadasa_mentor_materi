const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let fetchData = (url, isAsync = false) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, isAsync)
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
        else {
            console.log(xhr.status)
        }
    }
    xhr.send()
}

// console.log("proses mulai")
// fetchData("https://jsonplaceholder.typicode.com/todos/", true)
// console.log("proses selesai")