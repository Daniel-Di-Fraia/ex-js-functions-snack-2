function sequenzaOperazioni(operazioni, intervallo) {
    let indice = 0;
    
    const timer = setInterval(() => {
        operazioni[indice]();
        indice++;
        
        if (indice >= operazioni.length) {
            clearInterval(timer);
        }
    }, intervallo);
}

const op1 = () => console.log("Operazione 1");
const op2 = () => console.log("Operazione 2");
const op3 = () => console.log("Operazione 3");

sequenzaOperazioni([op1, op2, op3], 1000);
