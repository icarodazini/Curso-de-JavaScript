// Curso de JavaScript #07 - Loops

let index = 0;

// Loop while - Executa o bloco de código enquanto a condição for verdadeira
while (index < 10) {
    console.log("Index é menor que 10!");
    index++;
}

const person = {
    name: "John",
    age: 30,
};

// Loop for...in - Itera sobre as propriedades de um objeto
for (property in person) {
    console.log(person[property]);
}