let numb = 0

while (numb < 10){
    console.log(numb);
    numb = numb + 1;
}

// Break keyword and Continue Keyword



let x = {name: "Gideon", performance: {Phy:97, chem:96, Math:70}};

console.log(Object.values(x.performance).reduce((a,b)=> a+b));

let xx = [];
for (var i in x.performance){
    xx.push(x.performance[i]);
}

console.log(xx);