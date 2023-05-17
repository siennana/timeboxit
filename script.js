const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskNameInput = document.getElementById('taskNameInput');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskName = taskNameInput.value.trim() || 'Task';
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskName}</span>
    <button class="startBtn">Start</button>
    <button class="stopBtn">Pause</button>
    <button class="deleteBtn">Delete</button>
    <span class="timer"></span>
  `;

  const startBtn = taskItem.querySelector('.startBtn');
  const stopBtn = taskItem.querySelector('.stopBtn');
  const deleteBtn = taskItem.querySelector('.deleteBtn');
  const timer = taskItem.querySelector('.timer');

  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  startBtn.addEventListener('click', () => {
    startTimer(timer);
  });

  stopBtn.addEventListener('click', () => {
    pauseTimer(timer);
  });

  taskList.appendChild(taskItem);
  taskNameInput.value = '';
}

function startTimer(timerElement, tasks) {
  let startTime = Date.now();
  const initialElapse = parseInt(timerElement.dataset.elapsedTime) || 0;
  console.log(initialElapse);
  const timerInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime + initialElapse;
    const formattedTime = formatTime(elapsedTime);
    timerElement.dataset.elapsedTime = elapsedTime;
    timerElement.textContent = formattedTime;
  }, 10);

  function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = time % 1000;
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}.${formatNumber(milliseconds, 3)}`;
  }

  function formatNumber(number, digits = 2) {
    return number.toString().padStart(digits, '0');
  }

  timerElement.dataset.timerInterval = timerInterval;
}

function pauseTimer(timerElement) {
  console.log(timerElement);
  const timerInterval = timerElement.dataset.timerInterval;
  if (timerInterval) {
    clearInterval(parseInt(timerInterval));
    delete timerElement.dataset.timerInterval;
  }
}


