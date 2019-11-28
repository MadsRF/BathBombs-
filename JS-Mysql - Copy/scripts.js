/*$.get("http://localhost:9000/api", function(data){

var html = data[0].country
$('#Texttest').append(html);

}); */


$.get("http://localhost:9000/api-products", function(data){

var priceamount = data[0].price;
$('#Pricetest').append(' ' + priceamount);

});


var x = document.getElementsByClassName("IntroPagePicture");
var y = 0;


function slider() {

    window.setInterval(Intropager, 11000);
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
