// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(num1, num2){
    return num1 + num2;
}

const sommaAnonima = function(a, b) {
  return a + b;
};

const arrowSomma = (a, b) => a + b;

console.log(somma(3,4));
console.log(sommaAnonima(2,2));
console.log(arrowSomma(5,6));

