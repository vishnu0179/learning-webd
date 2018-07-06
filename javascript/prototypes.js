let p={
    a:10 
}
let q=Object.create(p)
q.b=20;

let r = Object.create(q)
r.c=30;

console.log(p);
console.log(q)
console.log(r)

console.log(r.a)   // properties of p can be accessed with r

console.log(r.__proto__===q)
console.log(r.__proto__.__proto__===p)

q.a++;            // this creates a new variable a in object q rather than changing the value of a in object p 
//as q.a++ means q.a = q.a + 1  
console.log(q.a)  // 11 this is known COW- Copy over Write

console.log(p.a)  // 10 value does not changes in parent
console.log(r.a)  // 11 r.__proto__.a  Now r refers to the 'a' in object q