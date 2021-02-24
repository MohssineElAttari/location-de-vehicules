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
var span = document.querySelector(".close");

// When the user clicks the button, open the modal 
if (btn) {
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
}

// When the user clicks on <span> (x), close the modal
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// booking


var vehicle = document.querySelector("#vehicle-type");
var energie = document.querySelector("#Fuel-type");
var boite = document.querySelector("#transmission-type");
var prix, tax;

function hidden_item(target_element) {
    target_element.forEach(Element => {
        Element.style.display = "none";
    })
}

function vehicle_fun() {
    switch (vehicle.value) {
        case "City Car":
            prix = 12;
            document.querySelectorAll(".fuel").forEach((Element) => {
                Element.style.display = "block";
            })
            hidden_item(document.querySelectorAll(".boite"));
            document.querySelector('#manual').style.display = "block";
            break;
        case "Utility Vehicle":
            hidden_item(document.querySelectorAll(".fuel"));
            prix = 16;
            document.querySelector(".diesel").style.display = "block";
            hidden_item(document.querySelectorAll(".boite"));
            document.querySelector('#manual').style.display = "block";
            break;
        case "Compact Car":
            hidden_item(document.querySelectorAll(".fuel"));
            prix = 14;
            document.querySelector(".diesel").style.display = "block";
            document.querySelector(".gasoline").style.display = "block";
            document.querySelector(".hybrid").style.display = "block";
            hidden_item(document.querySelectorAll(".boite"));
            document.querySelector('#manual').style.display = "block";
            break;
        case "Sedan Car":
            hidden_item(document.querySelectorAll(".fuel"));
            prix = 20;
            document.querySelector(".diesel").style.display = "block";
            document.querySelector(".gasoline").style.display = "block";
            document.querySelector(".hybrid").style.display = "block";
            hidden_item(document.querySelectorAll(".boite"));
            document.querySelector('#automatic').style.display = "block";
            break;
        case "Motorcycle":
            hidden_item(document.querySelectorAll(".fuel"));
            prix = 10;
            document.querySelector(".gasoline").style.display = "block";
            document.querySelector(".electric").style.display = "block";
            hidden_item(document.querySelectorAll(".boite"));
            break;
        case "Heavy Equipment":
            hidden_item(document.querySelectorAll(".fuel"));
            prix = 900;
            document.querySelector(".gasoline").style.display = "block";
            document.querySelector(".diesel").style.display = "block";
            hidden_item(document.querySelectorAll(".boite"));
            document.querySelector('#manual').style.display = "block";
            break;
        case "Truck":
            hidden_item(document.querySelectorAll(".fuel"));
            prix = 250;
            document.querySelector(".diesel").style.display = "block";
            hidden_item(document.querySelectorAll(".boite"));
            document.querySelector('#automatic').style.display = "block";
            break;
    }
}

function choix_Fuel() {
    tax = Number(energie.value);
}

function boite_choix() {
    if (boite.value == "automatic") {
        tax += 0.19;
    }
}
var days,
    total;
document.querySelector(".btn_calc").addEventListener("click", function() {
    days = Number(document.getElementById("numberDays").value);
    total = Math.round(days * (prix + (prix * tax)));
    window.alert(`Days : ${days}\nPrice : €${prix}\nTax : ${Math.round(tax*100)}%\nTotal : €${total}`)
})