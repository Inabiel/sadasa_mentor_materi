let arr = [
    {
        name: "Name ",
        gender: "F",
        age: 20,
        weight: 58
    },
    {
        name: "Name 2",
        gender: "M",
        age: 18,
        weight: 58
    }, {
        name: "Name 3",
        gender: "F",
        age: 24,
        weight: 58
    },
    {
        name: "Name 4",
        gender: "F",
        age: 27,
        weight: 61
    }
]
console.log(arr.filter((ele) => ele.gender !== "M").map((ele) => {
    return {
        name: ele.name,
        weight: ele.weight,
        age: ele.age
    }
}).pop())