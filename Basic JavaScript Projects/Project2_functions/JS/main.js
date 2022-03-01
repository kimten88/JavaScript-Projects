

var A = "This is the first assigned variable " //assigning first variable
document.write(A); //displaying variable A

var B = "The second is phrased a little different " //assigning second variable
document.write(B); //displaying variable B

function My_First_Function() { //defining my function
    var str = "Congrats!"; //this is the text which will be displayed once the button has been clicked
    document.getElementById("Button_Text").innerHTML = str; //this method links the html id and the string earlier in the function
}

function My_Second_Function() { //new function is being defined
    var str = "This is a paragraph"; //string which will be displayed in the browser once button is clicked
    document.getElementById("Paragraph_Text").innerHTML = str; //links the text above into the .html doc, placed by the id
}

function My_Third_Function() { //new function
    var sentence = "Adding a concatenated "; //defining the string
    sentence += "statment here. "; //adding new concatenated operator
    document.getElementById("Concatenate").innerHTML = sentence; //communicates the sentance to the html id
}

