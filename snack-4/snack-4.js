// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer (time){
    return () => {
    setTimeout (() => {
        console.log("tempo scaduto!");
    }, time);
}}

const timer3s = creaTimer(2000);
timer3s();

