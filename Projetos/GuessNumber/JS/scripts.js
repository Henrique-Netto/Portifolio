const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit); // ação de jogar

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btnRestart');

// const numberDraw = Math.round(Math.random() * 10); // cria o numero aleatorio de 0 a 10

const GuessNumber = {
    max: 10, 
    attemptsNumber: 0,
    numberDraw: function(){
        return Math.round(Math.random()* this.max);
    },
    showButtonRestart: function(){
        btnRestart.style.display = 'flex'
    },
    clearInput: function(){
        inputValue.value = '';
    },
    updateAttempt: function(attempt, value){
        attempt.innerHTML = 'Tentativa: ' + value;
    },
    correctAnswear: function(){
        this.showButtonRestart();

        statusTitle.innerHTML = 'Parabéns, você acertou! 😀';
        statusTitle.classList.remove('incorrect-answear'); // remove essa classe
        statusTitle.classList.add('status-correct'); // e adiciona essa classe

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answear');

        this.clearInput();
    },
    incorrectAnswear: function(message){
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answear');

        this.clearInput(); // limpa o input
    },
};

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e){
    e.preventDefault(); // não recarrega a pagina

    const kick = inputValue.value;

    if(!kick){
        alert('Digite algum valor!');
        return;
    }

    GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber); // incrementa o numero de tentativas

    if(numberDraw == kick){
       // alert('Acertou')
       GuessNumber.correctAnswear();
    }else if(numberDraw > kick){
       // alert('O numero é maior');
       GuessNumber.incorrectAnswear('O número é maior!');
    } else if(numberDraw < kick){
       // alert('O numero é menor');
       GuessNumber.incorrectAnswear('O número é menor!');
    }

};

function restartGame(){
    document.location.reload(true);
}
