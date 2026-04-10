let tasks = [{ id: 1, text: "Estudar JS", done: false }];

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
    inputTxtTask.value = "";
    inputTxtTask.placeholder = "Digite uma tarefa";
  } else {
    inputTxtTask.placeholder = "Digite uma tarefa valida";
  }
});

inputTxtTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskButton.click();
  }
});
