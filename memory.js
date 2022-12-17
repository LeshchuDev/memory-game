var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

c0.addEventListener("click", function() {odkryjKarte(0);});
c1.addEventListener("click", function() {odkryjKarte(1);});
c2.addEventListener("click", function() {odkryjKarte(2);});
c3.addEventListener("click", function() {odkryjKarte(3);});

c4.addEventListener("click", function() {odkryjKarte(4);});
c5.addEventListener("click", function() {odkryjKarte(5);});
c6.addEventListener("click", function() {odkryjKarte(6);});
c7.addEventListener("click", function() {odkryjKarte(7);});

c8.addEventListener("click", function() {odkryjKarte(8);});
c9.addEventListener("click", function() {odkryjKarte(9);});
c10.addEventListener("click", function() {odkryjKarte(10);});
c11.addEventListener("click", function() {odkryjKarte(11);});

var widocznaKarta = false;
var turnCounter = 0;
var odkrytaKarta1;
var lock = false;   // robimy blokadę żeby nie można było odkryć więcej niż 2 karty na raz
var pairsLeft = 6;  //  jest 6 par do odkrycia-odliczamy ile par zostało po odkryciu-podczepimy to pod fukncję schowajKarty

function odkryjKarte(nr) {
    var opacityValue = $('#c'+nr).css('opacity');
    if(opacityValue != 0 && lock == false) {
        lock = true;
        var obraz = "url(img/" + cards[nr] + ")";
        $("#c" + nr).css("background-image", obraz);
        $("#c" + nr).addClass("cardA");
        $("#c" + nr).removeClass("card");

        if(widocznaKarta == false) {
            //pierwsza karta
            widocznaKarta = true;
            odkrytaKarta1 = nr;
            lock = false;
        }

        else {
            //druga karta
            if(cards[odkrytaKarta1] == cards[nr]) {
                //alert("para");
                setTimeout(function() {schowajKarty(nr, odkrytaKarta1)}, 750);
            }

            else {
                //alert("pudło");
                setTimeout(function() {zakryjKarty(nr, odkrytaKarta1)}, 1000);
            }
            turnCounter++;
            $(".score").html("Turn counter: " + turnCounter);
            widocznaKarta = false;
        }
    }
}

function schowajKarty(nr1, nr2) {
    $('#c' +nr1).css('opacity', '0');
    $('#c' +nr2).css('opacity', '0');
    pairsLeft--;
    if(pairsLeft == 0) {$('.board').html('<h1>YOU WIN </br>in ' +turnCounter+ ' moves!</h1>')};
    lock = false;
}

function zakryjKarty(nr1, nr2) {
        $("#c" + nr1).css("background-image",'url(img/karta.png)');
        $("#c" + nr1).addClass("card");
        $("#c" + nr1).removeClass("cardA");
        $("#c" + nr2).css("background-image",'url(img/karta.png)');
        $("#c" + nr2).addClass("card");
        $("#c" + nr2).removeClass("cardA");
        lock = false;
}