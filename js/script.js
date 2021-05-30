
// dati cliente km
var x = prompt("Inserire km di percorrenza");

// dati cliente età
var y = prompt("Inserire l'anno di nascita");
var age = parseInt(y) - 2021;
// prezzo piu sconti 
var price = x * 0.21;
var scontoMinori = price - price /100 * 20;
var scontoSenior = price - price /100 * 40;

// comandi da eseguire
if (age < 18) {
    document.getElementById("result").innerHTML = scontoMinori + " € ";
} 
else { 
    if (age >= 65) {
        document.getElementById("result").innerHTML = scontoSenior + " € ";
    } 
    else {
        document.getElementById("result").innerHTML = price + " € ";
    }
} 
