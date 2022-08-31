// Task
// write a function in which you will generate a random number between 0, 10
// and then find user who have guess correct number & also pass your guess number as a parameter
// and check that have you guess correct or not
// data = [{
//     name: "ahmed",
//     guess: 5
// }, {
//     name: "ali",
//     guess: 4
// }, {
//     name: "sara",
//     guess: 4
// }]

// function name(params) {
    
// }

data = [
    {
    name: "Usama",
    guess: 5
}, {
    name: "Ali",
    guess: 4
}, {
    name: "Waqar",
    guess: 7
}
]

let a = (Math.random() * 10).toFixed(0);
console.log("\n");
console.log("random: "+a);


for (i = 0; i < data.length; i++) {
    if (data[i].guess == a) {
        console.log(data[i].name +" "+ data[i].guess + " guess value is match");
    }
    else{
        console.log(data[i].name +" guess value is not match");
    }
}
