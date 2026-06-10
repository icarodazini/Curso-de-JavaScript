// Curso de JavaScript #05 - Objetos

// Criando um objeto
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["Ler", "estudar", "viajar"],
    dog: {
        name: "Rex",
        age: 5
    } 
};

// Acessar as propriedades do objeto
const { firstName, lastName, age, hobbies, dog } = person;   

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(dog);

// Acessar um determinado elemento do array dentro do objeto
const buscarHobbies = person.hobbies[2];

console.log(buscarHobbies); 