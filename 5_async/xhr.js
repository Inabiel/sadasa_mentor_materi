const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let fetchData = (url, success, error, isAsync = false) => {
    console.log("kode dimulai")
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, isAsync)
    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            for (let i = 0; i < 999999; i++) {
                let i = new Date()
            }
            success(xhr.responseText)
        }
        else {
            error(xhr.status)
        }
    }
    xhr.send()
    console.log("kode selesai")
}

fetchData("https://jsonplaceholder.typicode.com/todos/", (success) => {
    console.log(success)
}, (err) => {
    console.log(err)
}, true)
