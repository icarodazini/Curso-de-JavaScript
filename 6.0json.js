// Curso de JavaScript #06 - JSON

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

// Convertendo o array de objetos para JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Convertendo o JSON de volta para um array de objetos
const todosList = JSON.parse(todosJSON);
console.log(todosList);