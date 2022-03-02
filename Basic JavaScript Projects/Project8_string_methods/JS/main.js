function full_Sentence() { //concat sentence function
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //slice method
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = section;
}

function upperCase_Method() { //toUpperCase method
    var statement = "Party on friday!";
    var caps = statement.toUpperCase();
    document.getElementById("Upper").innerHTML = caps;
}

function search_Method() { // search method
    var sentence = "I drove to the store on Thursday.";
    var section = sentence.search("store");
    document.getElementById("textSearch").innerHTML = section;
}

function string_Method() {//convert to string
    var X = 102;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {//format number to specific length
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function toFixed_Method() {// converting number to string, rounding to specific decimals
    var x = 5483.58392245;
    document.getElementById("Fixed").innerHTML = x.toFixed(3);
}

function valueof_Method() { //convert number to a string
    var x = 23.111111;
    document.getElementById("Value").innerHTML = x.valueOf();
}
