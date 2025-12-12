function contoAllaRovescia(num) {
    const stampa = setInterval(() => {
        console.log(num--);
        if (num === 0) {
            clearInterval(stampa);
            console.log("tempo scaduto!");
        }
    }, 1000);


}

contoAllaRovescia(5);