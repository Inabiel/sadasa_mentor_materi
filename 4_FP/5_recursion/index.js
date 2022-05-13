//contoh recursion

let countToOne = (num) => {
    if (num > 0) {
        console.log(num)
        countToOne(num - 1)
    }
}

countToOne(15000)
