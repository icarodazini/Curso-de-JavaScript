// Curso de JavaScript #10 - Funções & Arrow Functions

// Função tradicional
function sum(a, b = 10){
    return a + b;
}

// Arrow Function
const sumArrow = (a, b = 10) => {
    return a + b;
};

// Mesma coisa que a função acima, mas com sintaxe mais curta
const sumArrow = (a, b = 10) => a + b;  

const sumValue = sumArrow(2);

console.log(sumValue);