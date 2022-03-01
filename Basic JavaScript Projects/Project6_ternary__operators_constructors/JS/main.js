function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_Ride + "to ride."; //function utilizing tenary operation using input from the browser
}

function Vehicle(Make, Model, Year, Color) { //constructor function using this
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //constructor function using new
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year; //contructor function to display results in HTML
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; } //nested function
        Plus_one();
        return Starting_point;
    }
}
