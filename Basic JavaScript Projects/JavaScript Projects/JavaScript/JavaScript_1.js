function Pet_Function() {
    var Pet_Output;
    var Pets = document.getElementById("Pet_Input").value;
    var Pet_String = " are amazing!";
    switch (Pets) {
        case "Dog":
            Pet_Output = "Dogs" + Pet_String;
        break;
        case "Cat":
            Pet_Output = "Cats" + Pet_String;
        break;
        case "Fish":
            Pet_Output = "Fish" + Pet_String;
        break;
        case "Bird":
            Pet_Output = "Birds" + Pet_String;
        break;
        default:
            Pet_Output = "Please enter your favorite type of pet exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Pet_Output;
}

function Change_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "yellow");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

