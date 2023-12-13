$(function(){

    $('.card').hover(function(){ //função para ao passar o mouse crescer o icone
        $(this).animate({
            "width": 90,
            "height":90,
            "margin-top": -30
        }, 200);
    }, function(){
        $(this).animate({ //função para ao tirar o mouse voltar ao pradao o icone
            "width": 80,
            "height":80,
            "margin-top": -0
        }, 200);
    });
});