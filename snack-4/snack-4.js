function creaTimer (time){
    return setTimeout (() => {
        console.log("tempo scaduto!");
    }, time);
}

creaTimer(2000);

