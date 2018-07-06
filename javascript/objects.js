function fruit (color, taste)
{   
    this.color = color;
    this.taste = taste;
}
let orange= new fruit("orange","sweet")
let apple = new fruit("red","Sour")

console.log(orange)
console.log(apple)

let mango={
    color:"yellow",
    taste:"sweet"
}

console.log(mango)

console.log(this)
function fun(){             
    console.log(global==this) // In node Js everything is running under global but in browser everythin runs under window
                              // Window is the equivalent of global in browser
}
fun();


//////////
//new ///
/////////

function fun2(){
    this.p="something";
    return 10;
}
let o1= fun2()
let o2= new fun2()

console.log(o1);   // o1 is just a variable with a return value of 10
console.log(o2);   // new creates an empty object and this returns to that object
console.log(o1.p)  // this works with objects only
console.log(o2.p)  // o2 is an object 


////////////////////////////////
///classes using this and new///
///////////////////////////////

function Person(name,age)
{
    this.firstname = name.split(" ")[0];
    this.lastname = name.split(" ")[1];
    // age is now a private variable
    
    //this.age = age;  this makes the age as a public variable


    this.isAdult= function(){
        return age>18
    }
}

let p = new Person("John Smith",30);
let q = new Person("Harry Potter",12)

console.log(p.isAdult())
console.log(q)

