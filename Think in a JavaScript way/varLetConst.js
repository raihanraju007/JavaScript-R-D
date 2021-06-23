
var varVariable = "This is var";
if (true){
    var varVariable = "This is var Again";
}
console.log(varVariable);


if (true){
    let letVariable = "This is let";
     letVariable = "This is let Again";
    console.log(letVariable);
}

if (true){
    // const constVariable = "This is Const";
    // constVariable= "This is Const Again";

    const constVariable = {
        name: "JavaScript",
        age : "25 Years"
    };
    constVariable.name ="JS";
    console.log(constVariable);
}
