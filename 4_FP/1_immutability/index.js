//contoh Immutability dan side effects

const studentArr = [
    {
        name: "student 1",
        homeWorkMark: 78,
        midTermMark: 80,
        finalExamMark: 40
    },
    {
        name: "student 2",
        homeWorkMark: 60,
        midTermMark: 50,
        finalExamMark: 99
    },
]

const processedStudentMark = studentArr.map((ele) => {
    return {
        name: ele.name,
        averageMark: parseInt((ele.finalExamMark + ele.homeWorkMark
            + ele.midTermMark) / 3),
        isGraduate: parseInt((ele.finalExamMark + ele.homeWorkMark
            + ele.midTermMark) / 3)
            > 76 ? "Graduated" : "Not Graduated"
    }
})
console.log(processedStudentMark)
console.log(studentArr)//Data tidak terganti