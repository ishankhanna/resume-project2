let rmbtn=document.querySelector(".readmore")
let dots=document.querySelector(".dots")
let moredesc=document.querySelector(".moredesc")

rmbtn.addEventListener("click",function(){
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        rmbtn.innerText = "Read more";
        moredesc.style.display = "none";
    } else {
        dots.style.display = "none";
        rmbtn.innerText = "Read less";
        moredesc.style.display = "inline";
    }
})

//


//testimonial_js
let i = 0;
let ids = [];
let time = 3000;
let j = 0;

ids[0] = "a1";
ids[1] = "a2";
ids[2] = "a3";

function changeImg() {
    document.getElementById(ids[j]).style.display = 'none'
    document.getElementById(ids[i]).style.display = 'block';
    j = i;
    if (i < ids.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}


function changeImgto(k) {
    document.getElementById(ids[k]).style.display = 'block';
    document.getElementById(ids[j]).style.display = 'none';
    document.getElementById(ids[i]).style.display = 'none';

    if (k < ids.length - 1) {
        i = k + 1;
    } else {
        i = 0;
    }

}


window.onload = changeImg;



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


////////////////////////MODAL//////////////////////////////////////////


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
