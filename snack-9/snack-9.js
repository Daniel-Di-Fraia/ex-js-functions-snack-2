// function sequenzaOperazioni(operazioni, intervallo) {
//     let indice = 0;
    
//     const timer = setInterval(() => {
//         operazioni[indice]();
//         indice++;
        
//         if (indice >= operazioni.length) {
//             clearInterval(timer);
//         }
//     }, intervallo);
// }

// const op1 = () => console.log("Operazione 1");
// const op2 = () => console.log("Operazione 2");
// const op3 = () => console.log("Operazione 3");

// sequenzaOperazioni([op1, op2, op3], 1000);


// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.


function sequenzaOperazioni(operazioni,intervallo){

    operazioni.forEach((operazione,index)=> {
        setTimeout(()=> {
            operazione();
        }, intervallo * index);
    });
}

sequenzaOperazioni([
    ()=> console.log("operazione 1"),
    ()=> console.log("operazione 2"),
    ()=> console.log("operazione 3")
],2000);
