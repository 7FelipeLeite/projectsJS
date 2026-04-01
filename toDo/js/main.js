//Começaremos com a tarefa de criar um novo objeto na lista, faremos o DOM separado da lógica.

//DOM
const inputTxtTask = document.getElementById("inputTxtTask");
const taskButton = document.getElementById("taskButton");
const taskOrderedList = document.getElementById("taskList");

function createTaskElement(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkButton = document.createElement("button");
  const eraseButton = document.createElement("button");

  checkButton.textContent = "✅";
  eraseButton.textContent = "🗑️";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(checkButton);
  li.appendChild(eraseButton);

  return li;
}

//LÓGICA
taskButton.addEventListener("click", () => {
  if (inputTxtTask.value.trim() != "") {
    const task = createTaskElement(inputTxtTask.value);
    taskOrderedList.appendChild(task);
    inputTxtTask.placeholder = 'Digite uma tarefa'
  } else {
    inputTxtTask.placeholder = "Digite uma tarefa valida";
  }
});
