//Beberapa bentuk function

//Named Function
let array = [99, 88, 77, 66]

function getLastArrayValue(array) {
    return array.slice(-1)
};
console.log(`${getLastArrayValue(array)} - Contoh Named Func`)

//function Expression
let functionToGetLastArrayValue = function (array) {
    return array.slice(-1)
};
console.log(`${functionToGetLastArrayValue(array)} - Contoh Function Expression`)

//Anonymous Function
console.log((function (arr) {
    return array.slice(-1).toString()
})(array), "- Contoh Anonymous Func")

//Arrow Function
let arrowFuncToGetLastArrayValue = (array) => {
    return array.slice(-1)
}
console.log(`${arrowFuncToGetLastArrayValue(array)} - Contoh Arrow Func`)