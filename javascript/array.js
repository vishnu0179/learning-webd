let arr=[6, 3, 9 ,4 ,2 , 1 ,7 ,8 ,5, 14, 26, 35, 91]
console.log(arr.sort())
// JS by default does a lexicographical sort

function compare(a,b){
    return a-b;
}
arr.sort(compare)  // INSERTION SORT
console.log(arr)

//OR

console.log(arr.sort(function (a,b){
    return a-b;
}))

let arr2=arr.map(function(item){
    return item*item;
})

let arr3= arr2.map(Math.sqrt);

console.log(arr3)

//////////////
///Filter/////
/////////////

let a=[1,2,3,4,5,6,7,8,9]

let a2= a.filter(function(item){
    
    return item % 3 === 0
})

console.log(a2)

/////////////
//REDUCE////
///////////

let b=[1,2,3,4,5,6,7,8]

let b2 = b.reduce(function(accum,item){
    return accum+item;
})

console.log(b2)

function factorial(init,nextVal){
    return init*nextVal;
}
let b3= b.reduce(factorial);
console.log(b3)
