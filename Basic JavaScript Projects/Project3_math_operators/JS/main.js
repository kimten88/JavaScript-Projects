function Math_Addition() {  //function for addition
    var addition = 2 + 2; // setting the variable
    document.getElementById("Math").innerHTML = '2 + 2 = ' + addition; //linking to html
}

function Math_Subtraction() { //function for subtraction
    var subtraction = 5 - 2;
    document.getElementById("mathSubtract").innerHTML = '5 - 2 = ' + subtraction;
}

function Math_mutiply() { //function for multiplication
    var simple_Math = 6 * 8;
    document.getElementById("mathMulti").innerHTML = '6 * 8 = ' + simple_Math;
}

function Math_divide() { //function for division
    var simple_Math = 48 / 6;
    document.getElementById("mathDivi").innerHTML = '48 / 6 = ' + simple_Math;
}

function Math_more() { //function for multiple math operations
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("mathMultiple").innerHTML = '1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals ' + simple_Math;
}

function modulus_Operator() { //function for remainer
    var simple_Math = 25 % 6;
    document.getElementById("Mathremain").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_operator() { //function for negation operator
    var x = 10;
    document.getElementById("negOp").innerHTML = -x;
}

function increment_operator() { //function for increment operator
    var c = 5;
    c++;
    document.getElementById("incrOp").innerHTML = c++;
}

function decrement_operator() { //function for decrement operator
    var d = 29;
    d--;
    document.getElementById("decrOp").innerHTML = d--;
}

window.alert(Math.random() * 100);

function math_object() { //function for math method
    var k = Math.sqrt(25);
    document.getElementById("objectMethod").innerHTML = k ;
}

