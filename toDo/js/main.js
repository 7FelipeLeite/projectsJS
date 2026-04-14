let tasks = [];
let idCounter = 0;

//DOM
const inputTxtTask = document.getElementById("inputTxtTask");
const taskButton = document.getElementById("taskButton");
const taskOrderedList = document.getElementById("taskList");

function createTaskElement(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkButton = document.createElement("button");
  checkButton.textContent = "✅";
  checkButton.addEventListener("click", () => {
    span.classList.toggle("feito");
    task.done = !task.done;
  });
  const eraseButton = document.createElement("button");
  eraseButton.textContent = "❌";
  eraseButton.addEventListener("click", () => {
    tasks = tasks.filter((t) => t.id !== task.id);
    li.remove();
  });

  span.innerText = task.text;
  li.appendChild(span);
  li.appendChild(checkButton);
  li.appendChild(eraseButton);

  return li;
}

//LÓGICA
taskButton.addEventListener("click", () => {
  if (inputTxtTask.value.trim() != "") {
    const task = {
      id: idCounter++,
      text: inputTxtTask.value,
      done: false,
    };
    tasks.push(task);
    const taskElement = createTaskElement(task);
    taskOrderedList.appendChild(taskElement);
    inputTxtTask.value = "";
  } else {
    inputTxtTask.placeholder = "Digite uma tarefa valida";
  }
});

//Função nativa pro enter clicar no botão enviar
inputTxtTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskButton.click();
  }
}); 