function somma(num1, num2){
    return num1 + num2;
}

const sommaAnonima = function(a, b) {
  return a + b;
};

const arrowSomma = (a, b) => a + b;

console.log(somma(3,4));
console.log(sommaAnonima(2,2));
console.log(arrowSomma(5,6));

