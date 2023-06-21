//1. function Definition
//Global variable
var fullName="Swati Aggarwal"; //Global variable declaration & Initilisation

function myCar(){
    // function body
    //statements
    //variable defined inside a function is called local variable
    let car="Breeza";   //local variable declaration and initialization
    console.log(fullName);  //accessing variable globally using Var Variable
    console.log(car);       // local variable has to be executed inside the same block of code where it is initialized
}
//2.function calling
myCar();
console.log(car);   //It will through error as we can't execute/access local variable outside the function body
