var productData;

// Gets all information about products from the API-products and display them on frontpage
$.get("http://localhost:9000/api-products", function(data){
    console.log('hej');
    var html = '';
    productData = data;

    for(i = 0; i < data.length; i++){
        html += '<div class="item" + id=" '+ i +' "> ' +
            '<img class="pic" src="../pictures/bath7.jpg" title="Bathbomb for now" alt="Bathbomb for now"> ' +
            '<p class="productTitle" >' + data[i].name + '</p>' +
            '<p class="descriptionText">' + data[i].description + '</p>' +
            '<p class="priceText">' + data[i].price + ' kr' + '</p>' +
            '<div class="AddToCart" +  onclick="addToBasket(this)" +>Press me to add to cart</div></div>'
    }
    $('.frontPageProductWrapper').append(html);

});


function addToBasket(elem){

var itemID;

    //Press F for
    /*$('.AddToCart').on('click', function () {
    var parent_id = $(this).parent().attr('id');
    itemID = parent_id;
    console.log(parent_id);
    }); */

    console.log(elem.parentNode.id);

    x = Number(elem.parentNode.id);



    document.cookie = "name=" + productData[x].name;

    $('#cartitem-container').empty().append(

        '<p>' + document.cookie + '</p>'

    );

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







