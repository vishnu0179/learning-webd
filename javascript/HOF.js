function creategreeter(name) {
    function greeter(){
        console.log("Hello"+name)
    }
    return greeter;
    
}

vishnugreeter=creategreeter('Vishnu');
vishnugreeter();


let a= function() {}
let b=a
let c=b



function createCounter(initVal, delta){
    let val= initVal
    function counter(){
        val=val+delta
        return val;
    }
    return counter;
}
 
count1=createCounter(3,3);
count2 = createCounter(5,5);

console.log(count1());
console.log(count1());
console.log(count1());

console.log(count2());
console.log(count2());
console.log(count2());
