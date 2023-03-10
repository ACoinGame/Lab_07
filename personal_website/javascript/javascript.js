let firstCourse = {code:"ACIT 1620", name:"Web Fundamental Technologies"};
let secondCourse = {code:"ACIT 1515", name:"Scripting for IT"};
let thridCourse = {code:"ACIT 1630", name:"Database Systems"};

const courseList = [firstCourse, secondCourse, thridCourse];

let answer

do {
    answer = prompt ('type 4-digit number');
    console.log(answer.length === 4)
}
while (isNaN(answer) || !(answer.length === 4)); 

for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(answer)) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`)
    } else if (i + 1 === Object.keys(courseList).length) {
        courseList.push({code: `ACIT ${answer}`, name: null})
        console.log(`Success`)
        break
    }
}