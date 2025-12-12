// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(num) {
    const intervalId = setInterval(() => {
        console.log(num--);
        if (num === 0) {
            clearInterval(intervalId);
            console.log("tempo scaduto!");
        }
    }, 1000);


}

contoAllaRovescia(5);

// function contoAllaRovescia(num) {

//     let counter = num;

//     const intervalId = setInterval(() => {
//         if (counter > 0) {
//             console.log(counter);
//             counter--;
//         } else {
//             console.log("tempo scaduto");
//             clearInterval(intervalId);
//         }
//     }, 1000);


// }

// contoAllaRovescia(5);
