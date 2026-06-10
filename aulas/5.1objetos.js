// Curso de JavaScript #05 - Objetos

// Acessar uma propriedade de um objeto aninhado
const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

// Acessar a descrição do último todo
const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo); 