function first_dictionary() { //defining our first dictions as a function
    var Animal = {
        Species: "Cat",
        Color: "Black",
        Breed: "Domestic Short Hair",
        Age: 1,
        Sound: "Meow!"
    };
    delete Animal.Sound;//deleting animal sounds key from library
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //linking dictionary output to html file
}