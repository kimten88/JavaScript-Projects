function countdown() { //countdown function
    var seconds = document.getElementById("seconds").value;

    function tick() {//adds the ability to countdown
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
} 


//adding slideshow transitions//

var slideIndex = 1;//defining slideIndex for future function
showSlides(slideIndex);


function plusSlides(n) { //function for changing slides
    showSlides(slideIndex += n);
}

function currentSlide(n) {//fucntion for current slide
    showSlides(slideIndex = n);
}

function showSlides(n) { //bringing everything together
    var i;
    var slides = document.getElementsByClassName("mySlides");//retrieves HTML defined element
    var dots = document.getElementsByClassName("dot");//retrieves HTML defined element
    if (n > slides.length) { slideIndex = 1 }//start with slide 1
    if (n < 1) { slideIndex = slides.length }//if user has selected or navigated to a new slide, said slide is displayed
    for (i = 0; i < slides.length; i++) {//i increases by 1 if it is less than the slides length
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {//i increases by 1 if it is less than the dots length
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}