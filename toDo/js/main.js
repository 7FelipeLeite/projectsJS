let tasks = [];
let idCounter = 1;

//DOM
const inputTxtTask = document.getElementById("inputTxtTask");
const taskButton = document.getElementById("taskButton");
const taskOrderedList = document.getElementById("taskList");

function createTaskElement(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkButton = document.createElement("button");
  checkButton.textContent = "✅";
  const eraseButton = document.createElement("button");
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
    //AO CLICAR NO BOTÃO CRIA UM OBJETO
    const task = {
      id: idCounter++,
      text: inputTxtTask.value,
      done: false,
    };
    //COLOCA ESSE OBJETO DENTRO DO ARRAY TASK
    tasks.push(task);
    console.log(tasks);

    //CRIA A VARIAVEL taskElement E COLOCA TUDO ISSO DENTRO DO OL
    const taskElement = createTaskElement(task);
    taskOrderedList.appendChild(taskElement);

    //Zera o input
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
