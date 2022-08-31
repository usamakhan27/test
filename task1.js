
// Task # 1 using for loop print even numbers in descending order (57-25)

for(a = 57; a >= 25; a--){
    if (a%2 == 0) {
        console.log(a);
    }
}

// Task # 2 write a function to print all users name & age from the given JSON

arr = [
    { 
        name1: "Ali",
        age: 12
    }, {
        name1: "Ahmed",
        class: "primary"
    }, {
        name1: "Sara",
        age: 15
    }
]

for (i of arr) {
    console.log(i.name1);
    console.log(i.age);
}

// arr.forEach(element => {
//     if(element : name1 == "Ali"){
//         console.log(element);
//     }
    
// });

// obj = {
//     name: "Ali",
//     age: 12,
//     gender: "male"
// }

// function runLoopOnMyCall(params) {
//     Object.values(obj).forEach(element => {
//         console.log(element);
//     });
// }
// runLoopOnMyCall()   // function call
// runLoopOnMyCall()   // function call
// runLoopOnMyCall()   // function call