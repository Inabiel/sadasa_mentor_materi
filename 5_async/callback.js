const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let fetchData = (url, success, error, isAsync = false) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, isAsync)
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success(xhr.responseText)
        }
        else {
            error(xhr.status)
        }
    }
    xhr.send()
}

fetchData("https://jsonplaceholder.typicode.com/todos/", (successResp => {
    let parsedJson = JSON.parse(successResp)
    fetchData(`https://jsonplaceholder.typicode.com/todos/${parsedJson[0].userId}`, (successResp => {
        fetchData("", () => {}, () => {})
    }), (err) => console.log(err), true)
}), (err) => console.log(err), true)
