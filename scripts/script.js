$(document).ready(function() {
    $('.btn').click(function() {
        $('.nav_links').toggleClass("show");
        $('ul li').toggleClass("hide");

    });
});

//test
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

// booking

var selected, Fuel = 0,
    dailyPrice, Percent = 0,
    duration, total_globale;

selected = document.getElementById("vehicle-type").value;
console.log(selected);

function choix_Fuel() {
    Fuel = document.getElementById("Fuel-type").value;
}

function choix_vehicle() { //e=moto
    switch (selected) {

        case "city-car":
            document.querySelector("#electric").style.display = "block";
            document.querySelector("#hybird").style.display = "block";
            document.querySelector("#gasoline").style.display = "block";
            document.querySelector("#diesel").style.display = "block";
            document.querySelector("#manual").style.display = "block";
            dailyPrice = 12;
        case "utility-car":
            document.querySelector("#diesel").style.display = "block";
            document.querySelector("#manual").style.display = "block";
            dailyPrice = 16;
        case "compact-car":
            document.querySelector("#electric").style.display = "block";
            document.querySelector("#hybird").style.display = "block";
            document.querySelector("#gasoline").style.display = "block";
            document.querySelector("#diesel").style.display = "block";
            document.querySelector("#manual").style.display = "block";
            dailyPrice = 12;
        case "sedan-car":
            document.querySelector("#hybird").style.display = "block";
            document.querySelector("#gasoline").style.display = "block";
            document.querySelector("#diesel").style.display = "block";
            document.querySelector("#automatic").style.display = "block";
            dailyPrice = 20;
            Percent = 0.19;
        case "motocycle":
            document.querySelector("#gasoline").style.display = "block";
            document.querySelector("#electric").style.display = "block";
            dailyPrice = 10;
            break;

        case "heavy-equipment":
            document.querySelector("#gasoline").style.display = "block";
            document.querySelector("#diesel").style.display = "block";
            document.querySelector("#manual").style.display = "block";
            dailyPrice = 900;
        case "truck":
            document.querySelector("#diesel").style.display = "block";
            document.querySelector("#automatic").style.display = "block";
            dailyPrice = 250;
            Percent = 0.19;
    }
}

function price() {
    var number_Days = document.getElementById("numberDays").value;

    // Price of booking calculation

    total_globale = (dailyPrice + (dailyPrice * (Fuel + Percent))) * number_Days;

    getElementById('priceis').innerHTML = total;

}