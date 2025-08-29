const submit= document.querySelector('.btn');
const userName= document.querySelector('#user-name');
const alarm= document.querySelector('.alert');
const greetings= document.querySelector('#greetings')

const numA= document.querySelector('#numA');
const numB= document.querySelector('#numB');
const operations= document.querySelector('#operations');
const output= document.querySelector('#output');
const result= document.querySelector('#result');
const myList= document.getElementById('my-list');
const addButton= document.getElementById('add-list');
const tasks= document.getElementById('tasks');
const taskCounter= document.querySelector('.taskCounter');
const themeButton = document.querySelector('.butn');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  
  if (body.classList.contains('light-theme')) {
    themeButton.textContent = "Dark";
  } else {
    themeButton.textContent = "Light";
  }
});

submit.addEventListener('click', (e)=>{
  e.preventDefault();

  if(userName.value===""){
    alarm.textContent= 'fill in username';
    alarm.classList.add('cl-alert');

    setTimeout(() => {
    alarm.textContent = "";
    alarm.classList.remove('cl-alert');
  }, 3000);
  }else{
     greetings.textContent= `Welcome ${userName.value}`;

     setTimeout(function(){
      return userName.value="";
     }, 3000);
  }

})

function updateTaskCounter() {
  const items = document.querySelectorAll('#tasks li input[type="checkbox"]');
  let remaining = 0;

  items.forEach(cb => {
    if (!cb.checked) {
      remaining++;
    }
  });

  if (remaining === 0) {
    taskCounter.textContent = "No tasks left 🎉";
  } else if (remaining === 1) {
    taskCounter.textContent = "1 task left";
  } else {
    taskCounter.textContent = `${remaining} tasks left`;
  }
}


addButton.addEventListener('click', ()=>{

  const taskText = myList.value.trim();

  if ( taskText=== ''){
    alert("Please enter a task ❗");
    return;
  }

  const li= document.createElement('li');
  li.classList.add('cl-list');
  const checkbox= document.createElement('input');
  checkbox.type= 'checkbox';
  const span= document.createElement('span');
  span.textContent= taskText;
  const button= document.createElement('button');
  button.textContent= 'clear';
  button.classList.add('cl-button')
  button.addEventListener('click', ()=>{
    li.remove();
    updateTaskCounter();
  })

  checkbox.addEventListener('change', ()=>{
    span.classList.toggle('done', checkbox.checked);
    updateTaskCounter();

  
  });

  
  

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  tasks.appendChild(li);
  updateTaskCounter();

  

  myList.value= '';




})

function calculate(a,b,op){
  if(op=='+')return a+b;
  if(op=='-')return a-b;
  if(op=='*')return a*b;
  if (op === "/") return b !== 0 ? a / b : "Error: Cannot divide by zero";
  return "Invalid operator";
}


output.addEventListener('click', () => {
  const a = Number(numA.value);
  const b = Number(numB.value);
  const op = operations.value;

  result.textContent= 'Result: '+ calculate(a,b,op)
});
