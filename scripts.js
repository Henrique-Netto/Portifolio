$(function(){

    $('.card').hover(function(){ //função para ao passar o mouse crescer o icone
        $(this).animate({
            "width": 70,
            "height":70,
            "margin-top": -30
        }, 200);
    }, function(){
        $(this).animate({ //função para ao tirar o mouse voltar ao pradao o icone
            "width": 60,
            "height":60,
            "margin-top": -0
        }, 200);
    });
});