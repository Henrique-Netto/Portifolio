let vez = 'o'; // variável para ver de quem é a vez, de O ou X

function atualizarPlacar() {
    const imgSrc = vez === 'o' ? 'o.png' : 'x.png';
    $('.placar img').attr('src', imgSrc);
}

function limparArea() {
    $('.area').html(''); // limpa a área para o jogo ser reiniciado
    $('.area').attr('data-marcado', '');
}

function verificarVencedor() {
    const marcados = ['o', 'x'];

    for (const op of marcados) {
        if (
            ($('.a1').attr('data-marcado') === op && $('.b1').attr('data-marcado') === op && $('.c1').attr('data-marcado') === op) ||
            ($('.a2').attr('data-marcado') === op && $('.b2').attr('data-marcado') === op && $('.c2').attr('data-marcado') === op) ||
            ($('.a3').attr('data-marcado') === op && $('.b3').attr('data-marcado') === op && $('.c3').attr('data-marcado') === op) ||
            ($('.a1').attr('data-marcado') === op && $('.a2').attr('data-marcado') === op && $('.a3').attr('data-marcado') === op) ||
            ($('.b1').attr('data-marcado') === op && $('.b2').attr('data-marcado') === op && $('.b3').attr('data-marcado') === op) ||
            ($('.c1').attr('data-marcado') === op && $('.c2').attr('data-marcado') === op && $('.c3').attr('data-marcado') === op) ||
            ($('.a1').attr('data-marcado') === op && $('.b2').attr('data-marcado') === op && $('.c3').attr('data-marcado') === op) ||
            ($('.c1').attr('data-marcado') === op && $('.b2').attr('data-marcado') === op && $('.a3').attr('data-marcado') === op)
        ) {
            setTimeout(function () {
                alert(`O vencedor foi o jogador: ${op.toUpperCase()}`);
                limparArea();
            }, 0);
            return;
        }
    }

    const a1 = $('.a1').attr('data-marcado');
    const a2 = $('.a2').attr('data-marcado');
    const a3 = $('.a3').attr('data-marcado');

    const b1 = $('.b1').attr('data-marcado');
    const b2 = $('.b2').attr('data-marcado');
    const b3 = $('.b3').attr('data-marcado');

    const c1 = $('.c1').attr('data-marcado');
    const c2 = $('.c2').attr('data-marcado');
    const c3 = $('.c3').attr('data-marcado');

    if (a1 !== '' && a2 !== '' && a3 !== '' && b1 !== '' && b2 !== '' && b3 !== '' && c1 !== '' && c2 !== '' && c3 !== '') {
        setTimeout(function () {
            alert("Empatou!");
            limparArea();
        }, 0);
    }
}

$(function () {
    atualizarPlacar();

    $('.area').bind('click', function () {
        if ($(this).find('img').length === 0) {
            if (vez === 'o') {
                $(this).html('<img src="o.png" border="0" height="50" />');
                $(this).attr('data-marcado', 'o');
                vez = 'x';
            } else {
                $(this).html('<img src="x.png" border="0" height="50" />');
                $(this).attr('data-marcado', 'x');
                vez = 'o';
            }

            atualizarPlacar();
            verificarVencedor();
        }
    });
});
