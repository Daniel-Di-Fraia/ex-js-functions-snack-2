// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.


function creaThrottler(func, limite){

    let ultimaEsecuzione = 0;

    return function (...args) {
        const ora = Date.now();

        if(ora - ultimaEsecuzione >= limite){
            ultimaEsecuzione = ora;
            func(...args);
        } else {
            console.log("non posso eseguire! troppo presto")
        }
    }
}

const throttledLog = creaThrottler(()=> console.log("Eseguito!"), 2000);

throttledLog(); //eseguito
throttledLog(); //troppo presto, non eseguito
setTimeout(throttledLog, 2500); //eseguito dopo 2.5 secondi
