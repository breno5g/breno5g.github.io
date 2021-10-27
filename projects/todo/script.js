let tasksSaved = [];

const lista = document.querySelector('#lista-tarefas');

// Seleciona elemento da lista de tarefas
lista.addEventListener('click', (e) => {
  const task = e.target;
  const allTasks = document.querySelectorAll('li');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
  }
  task.classList.add('selected');
});

// Cria elemento da lista de tarefas
function createTask() {
  const task = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  const pos = lista.children.length;
  li.textContent = task.value;
  li.setAttribute('pos', pos);
  if (task.value !== '') {
    lista.appendChild(li);
    tasksSaved.push({
      content: task.value,
      pos: li.getAttribute('pos'),
      status: 'uncompleted',
    });
  }
  task.value = '';
}

// Aciona o evento de criar tarefa com o enter
document.querySelector('#texto-tarefa').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    createTask();
  }
});

// Apaga todos os elementos da lista de tarefa
document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const alltasks = document.querySelectorAll('li');
  for (let i = 0; i < alltasks.length; i += 1) {
    alltasks[i].remove();
  }
});

// Apaga todos os elementos finalizados da lista de tarefa
document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  if (completed.length === 0) {
    alert('Nenhuma tarefa finalizada');
  } else {
    for (let i = 0; i < completed.length; i += 1) {
      completed[i].remove();
    }
  }
});

// Marca como concluido com double click
lista.addEventListener('dblclick', (e) => {
  const element = e.target;
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
    tasksSaved[element.getAttribute('pos')].status = 'uncompleted';
  } else {
    element.classList.add('completed');
    tasksSaved[element.getAttribute('pos')].status = 'completed';
  }
});

// Aciona o evento de criar tarefa
document.querySelector('#criar-tarefa').addEventListener('click', createTask);

// Salva as tarefas em local storage
document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('taskList', JSON.stringify(tasksSaved));
});

// limpa o local storage
document.querySelector('#limpar-salvas').addEventListener('click', () => {
  localStorage.clear();
});

// Altera o atributo pos
function setPos() {
  const taskList = lista.children;
  tasksSaved = [];
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].setAttribute('pos', i);
    tasksSaved.push({ content: taskList[i].textContent, pos: i });
  }
}

// move o item pra cima
document.querySelector('#mover-cima').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask === null) {
    return false;
  }
  if (selectedTask.previousElementSibling === null) {
    return false;
  }
  const taskList = lista;
  taskList.insertBefore(selectedTask, selectedTask.previousElementSibling);
  setPos();
});

// move o item pra baixo
document.querySelector('#mover-baixo').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask === null) {
    return false;
  }
  if (selectedTask.nextElementSibling === null) {
    return false;
  }
  const taskList = lista;
  taskList.insertBefore(selectedTask.nextElementSibling, selectedTask);
  setPos();
});

// remove item selecionado
document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const task = document.querySelector('.selected');
  tasksSaved.splice(task.getAttribute('pos'), 1);
  setPos();
  task.remove();
});

// carrega elementos salvos
window.addEventListener('load', () => {
  const tasks = JSON.parse(localStorage.getItem('taskList'));
  if (tasks !== null) {
    for (let i = 0; i < tasks.length; i += 1) {
      tasksSaved.push(tasks[i]);
      const li = document.createElement('li');
      li.textContent = tasks[i].content;
      li.classList.add(tasks[i].status);
      lista.appendChild(li);
    }
    setPos();
  }
});
