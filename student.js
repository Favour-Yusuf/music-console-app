let classData =[]


classData.push({name: "Peter", performance: {Phy:90, chem:96, Math:70}});
classData.push({name: "Malush", performance: {Phy:69, chem:73, Math:59}});
classData.push({name: "Gideon", performance: {Phy:97, chem:96, Math:70}});
classData.push({name: "samuel", performance: {Phy:79, chem:87, Math:67}});


let classScore =[]
classData.forEach((el)=> {
    classScore.push(Object.values(el.performance).reduce((a,b) => a + b));
});

console.log(
    "The average class Performance is:",
    classScore.reduce((a,b) => a + b) / classScore.length
);


// let yy = [7,8,2,0,5]

// console.log(
//     yy.sort((a,b) => a-b)
// );

// const sortedData = (x) => {
//     return(a,b) => {
//         if (a[x] < b[x]){
//             return 1
//         } else if(a[x] >b[x]){
//             return -1
//         }
//         return 0;
//     };
// };

// classData.sort(classData.sort(sortedData('total')));