//Closure
//Function didalam function.
//Dapat mengakses global variable dan variable dari parent function
//Closure tidak bisa diakses diluar fungsi induknya

let closureFunc = () => {
    let msg = "this is a message that show implementation of closure."
    let closureInnerFunc = () => {
        return msg
    }
    return closureInnerFunc
}

let closureImplement = closureFunc()
console.log(closureImplement())