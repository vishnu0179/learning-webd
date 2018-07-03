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


function f1()
{
    function f2(){        // f2 is never executed because it is never called
        return 5;
    }
}

let x= f1();

// let p=x();  this makes the function f2 executed



function score(initialVal,delta){

    let val = initialVal
    let totalScore={
        incr: function(){
            val+=delta
        },
        decr: function(){
            val-=delta
        },
        show: function(){
            console.log(val)
        }

        
    }
    return totalScore;
}

let k= score(10,20)
k.show()
k.incr()
k.incr()
k.decr()
k.show()

console.log(typeof k)
console.log(typeof k.show)
console.log(typeof k.show())
