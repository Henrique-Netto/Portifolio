const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTask = document.getElementById('count-tasks');

function updateCountTasks(){
    const allTasks = getTasks();
    countTask.innerHTML = allTasks.length;
}


function fillTable(){
    const allTasks = getTasks();
    allTasks.forEach(addTask);

    if(allTasks.length === 0){
        loadingMessage.innerHTML = "Você não tem nenhum tarefa!"
    } else{
        loadingMessage.innerHTML = ""
    }

    updateCountTasks();
}

function addTask(task){ // funcao que add na tabela
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task);

    table.appendChild(tr); // insere um novo filho dentro do elemento table
}

function innerHTMLTasks(task){
    const html = `
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>
         <a href="#" onclick="removeTask(${task.id})">
         <i class="fa-solid fa-trash"></i>
         </a>
    </td>
    `;

    return html;
}

function removeTask(id){
   const allTasks = getTasks();
   const taskFiltered = allTasks.filter(task => task.id !== id); // passa um filtro e aonde a id passada  for igual ao do local storage ele remove  

    setTasks(taskFiltered);
    reload(); // chamo a função de recarregar a tabela
}

function reload(){ // função de recarregar a tabela
    table.innerHTML = '';
    fillTable();
}