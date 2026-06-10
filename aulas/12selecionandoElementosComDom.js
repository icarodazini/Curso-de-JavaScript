// Curso de JavaScript #12 - Selecionando Elementos do DOM

//const addUserText = document.getElementById("add-user");
//const addUserText = document.querySelector("#add-user");
//const myForm = document.querySelector(".item");

// Selecionar múltiplos elementos
//⬇️ utilizar o querySelectorAll para selecionar múltiplos elementos
//const allItens = document.querySelectorAll(".items .item");
//const allItens = document.getElementsByClassName("item");

const allItens = document.getElementsByTagName("li");

console.log(allItens);