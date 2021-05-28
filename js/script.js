
// dati cliente km
var x = prompt("Inserire numero km di percorrenza");
// dati cliente età
var y = prompt("Inserire la vostra eta");

var price = parseInt(x) * 0.21;
var scontoMinori = price - price /100 * 20;
var scontoSenior = price - price /100 * 40;

if (y < 18) {
    document.getElementById("result").innerHTML = scontoMinori + " € ";
} else { 
    if (y >= 65) {
        document.getElementById("result").innerHTML = scontoSenior + " € ";
    } else {
        document.getElementById("result").innerHTML = price + " € ";
    }
} 
