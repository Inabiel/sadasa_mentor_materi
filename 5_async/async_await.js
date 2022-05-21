const axios = require('axios')

let fetchData = async (url) => {
    try {
        let sendData = await axios.get(url)
        let slicedData = sendData.data.slice(0, 10)
        console.log(slicedData)
    } catch (error) {
        console.log(error)
    }
}
fetchData("https://jsonplaceholder.typicode.com/todos/")