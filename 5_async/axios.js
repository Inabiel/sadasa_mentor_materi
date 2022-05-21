const axios = require('axios')

let fetchData = (url) => {
    return axios.get(url)
}

fetchData("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.data.slice(0, 10))
    .then(response => console.log(response))