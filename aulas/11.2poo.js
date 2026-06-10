// Curso de JavaScript #11 - Programação Orientada a Objetos (POO)

class Animal {
    constructor (name) {
        this.name = name;
    }   

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Apollo");

animal.speak();
dog.speak();

