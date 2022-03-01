document.write(typeof "Word");//type of string

document.write(typeof 3);//type of number

document.write("10" + 5); //string and number coercion


function my_Function() {
    document.getElementById("Test").innerHTML = "007 is not a number: " + isNaN("007");//NaN false
}

function my_other_Function() {
    document.getElementById("Test2").innerHTML = "'This a string' is not a number: " + isNaN("This is a string");//NaN true
}

document.write(2E310);//display infinity

document.write(-3E310);//display -infinity

document.write(10 > 3);//boolean true

document.write(10 < 3);//boolean false

console.log(2 + 2);//show consule log sum in developer tools

console.log(12 > 55); //consule log false


function my_double_Function() { //double equal signs example, true
    d = 10;
    e = 10;
    document.getElementById("eqDub").innerHTML = "10 == 10: " + (10 == 10);
}


document.write(3 == 11); //double eqaul false

function my_triple_Function() {
    x = 10;
    y = 10;
    document.getElementById("eqTrip").innerHTML = "10 === 10: " + (10 === 10); //triple equal sign example value and type
}
    

x = 55;
y = "82";
document.write(x === y); //different data type and different value

x = 82;
y = "82";
document.write(x === y); //triple example with equal value but different type

x = 15;
y = 92;
document.write(x === y); //same data type but different value

a = "Magnus";
b = "Magnus";
document.write(a === b); //tripe example w/ strings


function my_and_Function() {
    x = 10;
    y = 10;
    document.getElementById("And").innerHTML = "5 > 2 && 10 > 4: " + (5 > 2 && 10 > 4); //&& AND boolean true example
}

document.write(5 > 10 && 10 > 4); //&& AND false example

function my_or_Function() {
    x = 10;
    y = 10;
    document.getElementById("Or").innerHTML = "5 > 10 || 10 > 4: " + (5 > 10 || 10 > 4); // || OR operator true
}

document.write(5 > 10 || 10 > 20); //||OR false

function not_Function() {
    document.getElementById("Not").innerHTML = "20 is not greater than 10: " + !(20 > 10); //Not function false
}

function not_true_Function() {
    document.getElementById("trueNot").innerHTML = "5 is not greater than 10: " + !(5 > 10); //Not function true
}
