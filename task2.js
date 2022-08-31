// function calculator(n1,n2,opt) {
//     if(opt == "-"){
//         sub(n1,n2)
//     }
// }
// calculator(10,5,"-")

// function add(n1,n2) {
//     console.log(n1+n2);
// }
// function sub(n1,n2) {
//     console.log(n1-n2);
// }
// function mult(n1,n2) {
//     console.log(n1*n2);
// }
// function div(n1,n2) {
//     console.log(n1/n2);
// }

//============================================//

data = [
    { 
        name: "Ali",
        pass: 123
    }, {
        name: "Ahmed",
        pass: 112233
    }, {
        name: "Sara",
        pass: 2244
    }
]
//registration

registration("usama",8888)

function registration(n1,p1) {
    data.push({name:n1 , pass:p1})
    console.log(data);
}

//login

login("Ali",123)

function login(n1,p1) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let ans= (element.name == n1 && element.pass == p1) 
        if (ans) {
            console.log("login successful");
        }   
    }
    console.log("login falied");
    }
    


















// function login(n1,p1) {
//     data.forEach(element => {
//         if(element.name == n1 && element.pass == p1){
//             console.log("login successful :" + element.name);
//         }
//         if(!element.name == n1 && !element.pass == p1){
//             console.log("login failed");
//         }
        
//     });
// }
