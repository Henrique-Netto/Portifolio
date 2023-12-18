function addBola(){
    if (jogoAtivo) {
        var larguraCampoBola = $('.campoBola').width();
        var alturaCampoBola = $('.campoBola').height();

        var x = Math.floor(Math.random() * (larguraCampoBola - 50)); // 50 é a largura da bola
        var y = Math.floor(Math.random() * (alturaCampoBola - 50)); // 50 é a altura da bola
        var cor = Math.floor(Math.random()*4);  // Criar bolas coloridas, azul, vermelho, amarelo, preto, verde
    
        var bola = $('<div class="bola"></div>');
        bola.css('left', x + 'px');
        bola.css('top', y + 'px');

        switch(cor){  // Criar bolas coloridas, azul, vermelho, amarelo, preto, verde
            case 0:
                bola.css('background-color','blue');
                break;
            case 1:
                bola.css('background-color','red');
                break;
            case 2:
                bola.css('background-color','yellow');
                break;
            case 3:
                bola.css('background-color','black');
                break;
            case 4:
                bola.css('background-color','grren');
                break;                    
        }

        bola.bind('click', function(){
            $(this).fadeOut('fast'); // ao clicar na bolinha, ela some lentamente com o fadeout.
            placar++; // incrementa o contador a cada clique na bola
            atualizarPlacar(); // Atualiza o resultador do placar
        });

        //$(document.body).append(bola);
        $('.campoBola').append(bola); // Adiciona a bola dentro da div campoBola
    }
}

function limparBolas() {
    $('.bola').remove(); // Remove todas as bolas da tela
}

function atualizarPlacar(){
    $('#contadorPlacar').html(placar);
}

var placar = 0;
var jogoAtivo = false; // Adicionamos uma variável para controlar se o jogo está ativo

$(function () {
    $('#comecar').click(function () {
        jogoAtivo = true; // Iniciamos o jogo
        $(this).hide(); // Escondemos o botão começar
        $('#parar').show(); // Exibimos o botão parar
        setInterval(addBola, 1000);
    });

    $('#parar').click(function () {
        jogoAtivo = false; // Paramos o jogo
        placar = 0; // Zeramos o placar
        atualizarPlacar(); // Atualizamos o placar
        $('#comecar').show(); // Exibimos o botão começar
        $(this).hide(); // Escondemos o botão parar
        limparBolas(); // Limpa as bolas ao parar o jogo
    });

    atualizarPlacar(); // Atualizamos o placar inicial
});