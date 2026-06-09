// Curso de JavaScript #04 - Map, Filter & Reduce    
    
const numbers = [1, 2, 3, 4, 5];

// Funcão para multiplicar cada número por 2 (map = transforma os elementos do array com base em uma função)
const numberMyltipliedByTwo = numbers.map(function(number) {
    return number * 2;
});
console.log(numberMyltipliedByTwo);

const age = [18, 22, 15, 30, 25, 17];

// Função para filtrar apenas as idades pares (filter = filtra os elementos do array com base em uma condição)
const evenAge = age.filter(function(age) {
    return age % 2 === 0;
}); 
console.log(evenAge);

// Função para somar todas as idades (reduce = reduz os elementos do array a um único valor com base em uma função)
const sumOfAges = age.reduce(function(age, acumulator) {
    return age + acumulator;
}, 0);
console.log(sumOfAges); 