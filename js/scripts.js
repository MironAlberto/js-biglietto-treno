const kmCost = 0.21;
let fullPrice = ""; 

const eta = prompt("Quanti anni hai?");
const km = prompt ("Quanti km vuoi fare?"); 

const etaInNumero = parseInt(eta);
const kmInNumero = parseInt(km);

if (etaInNumero < 18) {

    fullPrice = (kmCost * kmInNumero) - ((kmCost * kmInNumero) * 20) / 100;

}

else if (kmInNumero > 65) {
    fullPrice = (kmCost * kmInNumero) - ((kmCost * kmInNumero) * 40) / 100;
}

else {
    fullPrice = kmCost * kmInNumero
}

/* console.log (fullPrice.toFixed(2)); */

document.getElementById('my-span').innerHTML = (fullPrice.toFixed(2));