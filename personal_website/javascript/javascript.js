let firstCourse = {code:"A1620", name:"Web Fundamental Technologies"};
let secondCourse = {code:"A1515", name:"Scripting for IT"};
let thridCourse = {code:"A1630", name:"Database Systems"};

const courseList = [firstCourse, secondCourse, thridCourse];

let answer

do {
    answer = prompt ('type 4-digit number');
    console.log(answer.length === 4)
}
while (isNaN(answer) || !(answer.length === 4)); //(isNaN(answer) && (2 === 3));


// do {
//     answer = prompt ("Are you human? ");
//     // console.log(answer)
// }
// while (!isNaN(answer));
// alert(answer);

