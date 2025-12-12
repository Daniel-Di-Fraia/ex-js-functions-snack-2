// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a,b) => a + b;
const moltiplica = (a,b) => a * b;
const sottrai = (a,b) => a - b;
const dividi = (a,b) => a / b;

const eseguiOperazione = (a,b,operazione) => operazione(a,b);

console.log(eseguiOperazione(2,3,somma)); //5
console.log(eseguiOperazione(10,2,sottrai)); //8
console.log(eseguiOperazione(4,10,moltiplica)); //40
console.log(eseguiOperazione(8,2,dividi)); //4

