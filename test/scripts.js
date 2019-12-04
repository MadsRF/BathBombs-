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

function direct(){
    window.location.href="URL";
}
function directCheckout(){
    window.location.href="URL";

}

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