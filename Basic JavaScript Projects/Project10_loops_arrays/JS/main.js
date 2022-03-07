function Call_Loop() {//while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function text_length() {//string length
    var text = "Music moves my soul";
    var length = text.length;
    document.getElementById("number").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//for loop
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_behaviors() { //array loop
    var Cat_Action = [];
    Cat_Action[0] = "sleeping";
    Cat_Action[1] = "playing";
    Cat_Action[2] = "eating";
    Cat_Action[3] = "purring";
    document.getElementById("Cat").innerHTML = "Right now the cat is " + Cat_Action[2] + ".";
}

function constant_function() {//constant function
    const Musical_Instrument = { type: "guitar", brand: "Gibson", color: "black" };
    Musical_Instrument.color = "black";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.brand + " was " + Musical_Instrument.price;
}

function new_Keyword() {//let keyword function
    let X = 55;
    document.getElementById("letKey").innerHTML="Let is equal to " + X;
}

let x = return_function(5, 12);
document.getElementById("return").innerHTML = "Product of 5 and 12 = " + x;

function return_function(a, b) {
    return a * b;
} 

let car = { //objects assignment
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";//break statment
for (let i = 0; i < 12; i++) {
    if (i === 8) { break; }
    text += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = text;

let new_text = "";//continue statement
for (let i = 0; i < 7; i++) {
    if (i === 4) { continue; }
    new_text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = new_text;

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";   
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

