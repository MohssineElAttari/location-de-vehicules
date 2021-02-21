$(document).ready(function() {
    $('.btn').click(function() {
        $('.nav_links').toggleClass("show");
        $('ul li').toggleClass("hide");

    });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cmyBtn");


var fName = document.getElementById("cName");
var fNumber = document.getElementById("cNumber");
var fEmail = document.getElementById("cEmail");
var fCity = document.getElementById("cCity");
var fMessage = document.getElementById("cMessage");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    // Get the valeu element fNasme
    document.getElementById("mName").innerHTML = fName.value;
    document.getElementById("mNumber").innerHTML = fNumber.value;
    document.getElementById("mEmail").innerHTML = fEmail.value;
    document.getElementById("mCity").innerHTML = fCity.value;
    document.getElementById("mMessage").innerHTML = fMessage.value;
    // mName = fName;


    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}