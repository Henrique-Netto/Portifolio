const modal = document.getElementById('modal');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');

// criar tarefa
function creatTask(e){
    e.preventDefault();

    if(!inputDescription.value || !inputDate.value){
        alert('Preencha todos os campos!')
        return;
    }

    const newTask = { // crio os objetos
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', { timeZone: 'UTC'}),// converto a data para o padão do browser
        id: Math.floor(Math.random() * 10000)
    }

    const allTasks = getTasks();
    //localStorage.setItem('@GoTasks', JSON.stringify([...allTasks, newTask ])); // chamo a função Json.Stringfy para salvar os objetos em um array
    setTasks([...allTasks, newTask]);

    reload();
    closeModal();
}

// abre modal
function openModal(){
    modal.style.display = 'flex';
}

//fecha o modal
function closeModal(){
    modal.style.display = 'none';
    clearFields(); // ao fechar o modal, chama a funçao de limpar os campos
}

// limpa os campos do modal
function clearFields(){
    inputDate.value = '';
    inputDescription.value = '';
}

btnCreateTask.addEventListener('click', creatTask) //ao clicar no salvar chama a função de criar tarefa
