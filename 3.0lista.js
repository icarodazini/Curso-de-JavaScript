// Curso de JavaScript #03 - Listas

const names = ["Felipe", "Maria", "João"];

// Acessa o primeiro elemento do array
const joao = names[2];
console.log(joao);

// Adiciona um elemento no final do array
names.push("Ana");
console.log(names);

// Adiciona um elemento no início do array
names.unshift("Carlos");
console.log(names);

// Remove o ultimo elemento do array
names.pop();
console.log(names);

// Buscar o índice de um elemento no array
console.log(names.indexOf("Maria"));

// Ordena os elementos do array em ordem alfabética
names.sort();
console.log(names);

// Verifica quantos elementos existem no array
console.log(names.length);

// Verifica se uma variável é um array
const inArray = Array.isArray(names);
console.log(inArray);