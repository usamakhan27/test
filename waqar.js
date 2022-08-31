info=[

    {name:"waqar",
    marks:2},
    
    {name:"uzaif",
    marks:4},
    
    
    {name:"usama",
    marks:6},
    
    ]
    
    
    let i = (Math.random()*6).toFixed(0);
    console.log(i);
    
    for (let j = 0; j < info.length; j++) {
        if(info[j].marks == i){
        console.log(info[j].marks);}
    }