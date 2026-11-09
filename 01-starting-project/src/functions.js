function sayHello() {
    console.log('Hello ${name}');
}
sayHello('George'); //print Hello George

function add(x,y){
    return x + y; 
}
console.log(add(2, 3));
console.log(add("Hello", " World"));

//Functions as parameters
function sayHi(){
    console.log('Hi!');
    myFunc();
}
sayHello(function(){
    console.log("bye")
});