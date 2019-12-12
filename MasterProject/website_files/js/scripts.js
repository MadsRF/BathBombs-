var x = document.getElementsByClassName("IntroPagePicture");
var y = 0;


function slider() {
    window.setInterval(Intropager, 11000);
}

// Gets all information about products from the API-products and display them on frontpage
$.get("http://localhost:9000/api-products", function(data){
    console.log('hej');
    var html = '';

    for(i = 0; i < data.length; i++){
        html += '<div class="item"> ' +
            '<img class="pic" src="../pictures/bath7.jpg" title="Bathbomb for now" alt="Bathbomb for now"> ' +
            '<p class="productTitle" >' + data[i].name + '</p>' +
            '<p class="descriptionText">' + data[i].description + '</p>' +
            '<p class="priceText">' + data[i].price + ' kr' + '</p></div>'
    }
    $('.frontPageProductWrapper').append(html);

});

// Gets login credentials from the owner api and compares them with the users input
function login_credentials(){
    $.get("http://localhost:9000/api-owner", function(data){
        console.log('JQuery fetch api-owner');
        var apiusername = data[0].username;
        var apipassword = data[0].password;

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if(apiusername === username && apipassword === password){
            window.location.href="http://localhost:9000/owner";
        }else{
            alert("Brugernavn eller password er forkert. Prøv igen!")
        }
    });



}


function Intropager() {
    
        console.log(y)

    x[y].style.transform = "translateX(-2000px)";

    y++

        if (y > (x.length)-1) {
            y = 0;
            for (i = 0; i <= x.length - 1; i++) {
                x[i].style.transform = "translateX(0px)";
                
            }
        };

    }
    

function NavBar() {
    if (document.documentElement.scrollTop > 25) {
        document.getElementById("NavBar").style.marginTop = "0px";
    } 
}

function direct(){
    window.location.href="URL";
}
function directCheckout(){
    window.location.href="URL";

}
//show and remove basket when basket picture is pressed
var basketboolean = true;
function viewBasket() {
    if (basketboolean) {
        document.getElementById("basket-container").style.visibility = "visible";
        basketboolean=false;
    }else if (!basketboolean){
        document.getElementById("basket-container").style.visibility = "hidden";
        basketboolean=true;
    }

}
//overwrites speed on sliding pictures
$(document).ready(function () {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 5000

})
//show and remove contactbox when button is pressed
var contactboolean = true;
function kontaktFomularKnapFunction() {
    if (contactboolean) {
        document.getElementById("kontaktFormular").style.display = "inherit";
        contactboolean=false;
    }else if (!contactboolean){
        document.getElementById("kontaktFormular").style.display = "none";
        contactboolean=true;
    }
}
//removes ccontact box if clicked outside of box
window.addEventListener('mouseup', function (event) {
    var box = document.getElementById('kontaktFormular');
    if (event.target != box && event.target.parentNode != box){
        box.style.display = "none";
        contactboolean=true;
    }
});







