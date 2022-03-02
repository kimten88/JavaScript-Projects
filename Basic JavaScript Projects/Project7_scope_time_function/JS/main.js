var x = 10; //global variable
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var x = 10; //local variable
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var x = 10; 
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() { // if function dependant on time
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function num_Function() { //if function with variable
    var x = 10;
    if (x < 18) {
        document.getElementById("Result").innerHTML = "x is less than 18";
    }
}

function Age_Function() { //if else function dependant on age
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
        document.getElementById("How_old_are_you?").innerHTML = Vote;
    }
    else {
        Vote = "You are not old enough to vote!";
        document.getElementById("How_old_are_you?").innerHTML = Vote;
    }
}

function Time_function() { //function if, else if, else dependent on time
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is the evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}