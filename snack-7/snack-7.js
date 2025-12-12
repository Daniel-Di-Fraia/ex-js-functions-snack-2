function eseguiEferma (mex, avvio, stop) {
    const stampa = setInterval(() => {
        console.log(mex);
    }, avvio);

    setTimeout(() => {
        clearInterval(stampa);
        console.log("fermati!");
    }, stop);
}

eseguiEferma("ciao", 1000, 10000);