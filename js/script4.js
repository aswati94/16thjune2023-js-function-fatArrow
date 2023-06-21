//define(
let addTwoNumber=(x,y=30)=>{  //here Y is a default value
    //function body
    //every function must return something
    console.log(x+y);
}

//function calling
addTwoNumber(20);

// A function definition can be assigned to a variable
let x = function getMyMessage(){
    console.log("hello world");
};

//function calling
getMyMessage(); //will through error as value of function already assigned to variable X
x(); //gives output as function is defined to a variable