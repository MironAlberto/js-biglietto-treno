const kmCost = 0.21;
let fullPrice = ""; 

const eta = prompt("Quanti anni hai?");
const km = prompt ("Quanti km vuoi fare?"); 

const etaInNumero = parseInt(eta);
if (eta < 18) {

    fullPrice = (kmCost * km) - ((kmCost * km) * 20) / 100;

}

else if (eta > 65) {
    fullPrice = (kmCost * km) - ((kmCost * km) * 40) / 100;
}

else {
    fullPrice = kmCost * km
}

/* console.log (fullPrice.toFixed(2)); */

document.getElementById('my-span').innerHTML = (fullPrice.toFixed(2));