// Juego - Adivinanza numero

let x = Math.floor(Math.random() * 10) + 1;

for (let i = 1; i < 11; i++) {
    numero = prompt("Ingrese un numero del 1 al 10");

    if (numero < x) {
        console.log("es mayor que " + numero);
    }
    else if (numero > x) {
        console.log("Es menor que " + numero);
    }
    else {
        console.log("Has GANADO el numero era " + x);
    }
}
