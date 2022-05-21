const BASE_URL = "http://localhost:8000"
const USER = "Nabil"
const ID_OF_POST = 12

//template literal
console.log(`${BASE_URL}/${USER}/post/${ID_OF_POST}`)

//tidak pake template literal
console.log(BASE_URL + "/" + USER + "/post/" + ID_OF_POST)