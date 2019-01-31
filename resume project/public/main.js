let rmbtn=document.querySelector(".readmore")
let rmdots=document.querySelector(".dots")
let moredesc=document.querySelector(".moredesc")

rmbtn.addEventListener("click",function(){
    if (rmdots.style.display === "none") {
        rmdots.style.display = "inline";
        rmbtn.innerText = "Read more";
        moredesc.style.display = "none";
    } else {
        rmdots.style.display = "none";
        rmbtn.innerText = "Read less";
        moredesc.style.display = "inline";
    }
})





//Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Ajax Form
function loadText() {
    var xhr = new XMLHttpRequest();
    var url = "/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    xhr.onload = function() {
        let response = JSON.parse(xhr.responseText);
        if (response.success === "false") {
            alert(response.error);
        } else {
            alert("Form was sucessfully submitted");
        }
    }

    let form = "";
    form += "name=" + document.getElementById("Name-Input").value + "&";
    form += "email=" + document.getElementById("Email-Input").value + "&";
    form += "phone=" + document.getElementById("Phone-Input").value + "&";
    form += "message=" + document.getElementById("Message-Input").value;
    xhr.send(form);
    clearForm();
}

function clearForm() {
    document.getElementById('Name-Input').value = "";
    document.getElementById('Email-Input').value = "";
    document.getElementById('Phone-Input').value = "";
    document.getElementById('Message-Input').value = "";
}
document.getElementById("submit-form").addEventListener('click', loadText);

// Testimonial Carousal Code
var slideIndex = 0, prev_slide=-1,slides,dots;

function currentSlide(index) {
    if (index > slides.length) { index = 0 } else if (index < 0) { index = slides.length - 1 }


    slides[prev_slide].style.display = "none";
    dots[prev_slide].className = dots[prev_slide].className.replace(" active", "");


    slides[index].style.display = "block";
    dots[index].className += " active";
    prev_slide = index;
    slideIndex = index + 1;
    clearInterval(Interval);
    Interval = setInterval(displayCarousel, 2000);
}

function displayCarousel() {
    if (slideIndex > slides.length - 1) { slideIndex = 0 }
    if (prev_slide > -1) {
        slides[prev_slide].style.display = "none";
        dots[prev_slide].className = dots[prev_slide].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    prev_slide = slideIndex;
    slideIndex++;
}

function createCarousel(cls_name, prnt_name) {
    slides = document.getElementsByClassName(cls_name);
    if (slides.length > 1) {
        var db = document.createElement("div");
        db.classList.add("dot-box");
        document.getElementsByClassName(prnt_name)[0].appendChild(db);

        for (let j = 0; j < slides.length; j++) {
            var d = document.createElement("span");
            d.classList.add("prodot");
            db.appendChild(d);
            d.addEventListener('click', currentSlide.bind(null,j));
        }

        dots = document.getElementsByClassName("prodot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        Interval = setInterval(displayCarousel, 2000);
    }
}

let Interval;
window.onload = function() {
    createCarousel("grid_container7", "slideshow-container");
}