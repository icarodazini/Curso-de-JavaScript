// Curso de JavaScript #11 - Programação Orientada a Objetos (POO)

// Classe
class Person {
    // Método construtor
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Metodo para obter o nome completo da pessoa
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    // Método estático
    static speak() {
        console.log("Hello world!");
    }
}

// Criando uma instância da classe Person
const person = new Person("John", "Doe", 30);

person.getFullName();

Person.speak();