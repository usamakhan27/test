//Task # 1

arr = [
    {
        name:"Ali"
    },
    {
        name:"Ahmed"
    },
    {
        name:"Sara"
    }
]
result = "";

for (i = 0; i < arr.length; i++) {
    if (arr[i].name.length > result.length) {
        result = arr[i].name
    }    
}
console.log(result);

//Task # 2

array1 = [1,2,3,4]
array2 = [5,6,7,8]

result = []

for (i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i])
}
console.log(result);
