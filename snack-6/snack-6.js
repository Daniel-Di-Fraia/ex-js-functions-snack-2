// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


function creaContatoreAutomatico(time){

    let contatore = 0;

    return () => {
    setInterval(() => {
        console.log(contatore ++);
    }, time);
}}

const count1Second = creaContatoreAutomatico(1000);
const count2Seconds = creaContatoreAutomatico(2000);

count1Second();
count2Seconds();

