let studentData = []

studentData.push({
    name: "Savy",
    age : 40,
    course: "Biologist",
    score: 90
});

studentData.push({
    name: "Felix",
    age: 20,
    course: "Chemist",
    score: 50
});

studentData.push({
    name: "prank",
    age: 30,
    course: "Agriculture",
    score: 70
});

studentData.push({
    name: "Vic",
    age: 34,
    course: "Physicist",
    score: 75
});

studentData.push({
    name: "Sic",
    age: 36,
    course: "Civic",
    score: 65
})

studentData.push({
    name: "prank",
    age: 30,
    course: "Agriculture",
    score: 70
})

studentData.push({
    name: "prank",
    age: 30,
    course: "Agriculture",
    score: 70
})

studentData.push({
    name: "highest",
    age: 30,
    course: "Agriculture",
    score: 100
})

studentData.push({
    name: "pra",
    age: 50,
    course: "Agric",
    score: 95
})

studentData.push({
    name: "pr",
    age: 19,
    course: "Fg",
    score: 30
})

// let classScore = [];
// studentData.forEach((el) => {
//   classScore.push(Object.values(el.score).reduce((a, b) => a + b));
// });

// console.log(classScore);

  
  
function highestScore(studentData) {
    let indexOfhighestScoreObj = studentData.reduce((acc, elem, index, arr)=>{
       return acc = (elem.score > arr[acc].score) ? index : acc;
    },0);
    
    return indexOfhighestScoreObj
  }
  console.log(highestScore(studentData)); //=> index of highest scoring student
  console.log(studentData[highestScore(studentData)]) //highest scoring student object