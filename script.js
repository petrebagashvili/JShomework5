const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addText = document.getElementById('addText');
// const taskText= taskInput
taskList.style.margin='10px';
const task = document.createElement('div');
task.className = 'task';
const taskTextSpan = document.createElement('span');
taskTextSpan.textContent = taskText;
addText.addEventListener('click',function () {
    taskList.textContent='';
});
const completeButton = document.createElement('button');
completeButton.textContent = 'Complete';
completeButton.style.backgroundColor = 'lightgreen';
completeButton.style.color='white';
completeButton.addEventListener('click',function() {
    taskTextSpan.style.textDecoration='line-through';
    taskTextSpan.style.color='grey';
});
                        
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.style.backgroundColor='purple';
deleteButton.style.color='white';
deleteButton.addEventListener('click', function() {
    task.style.fontSize = '0px';
    deleteButton.style.width='0px';
    deleteButton.style.height='0px';
    deleteButton.style.fontSize='0px';
    completeButton.style.width='0px';
    completeButton.style.height='0px';
    completeButton.style.fontSize='0px';
});
task.appendChild(taskTextSpan);
task.appendChild(completeButton);
task.appendChild(deleteButton);
taskList.appendChild(task);   

