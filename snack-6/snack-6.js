function creaContatoreAutomatico(time){

    let contatore = 0;

    return setInterval(() => {
        console.log(contatore ++);
    }, time);
}

creaContatoreAutomatico(1000);
