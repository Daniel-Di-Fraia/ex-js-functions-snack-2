// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(mex) {
    setInterval(() => {
        console.log(mex);
    }, 1000);
}

stampaOgniSecondo("ciao");
