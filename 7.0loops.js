// Curso de JavaScript #07 - Loops


// Loop for
for (let index = 0; index < 10; index++) {
    console.log(index);    
}

const cars = ["Ford", "Chevrolet", "Fiat"];

// Iterando sobre o array usando um loop tradicional
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Iterando sobre o array usando um loop for...of
for (let car of cars) {
    console.log(car);
}

// Iterando sobre o array usando o método forEach
cars.forEach(function(car, index) {
    console.log(index);
    console.log(car);
});