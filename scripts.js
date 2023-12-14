$(function(){
    $('.card').hover(function(){ 
        var newWidth = 70;
        var newHeight = 70;

        if ($(window).width() <= 768) {
            // Se a largura da tela for menor ou igual a 768px, ajuste as dimensões dos ícones
            newWidth = 50;
            newHeight = 50;
        }

        $(this).stop().animate({
            "width": newWidth,
            "height": newHeight,
            "margin-top": -20
        }, 200);
    }, function(){
        var defaultWidth = 60;
        var defaultHeight = 60;

        if ($(window).width() <= 768) {
            // Se a largura da tela for menor ou igual a 768px, ajuste as dimensões dos ícones
            defaultWidth = 40;
            defaultHeight = 40;
        }

        $(this).stop().animate({
            "width": defaultWidth,
            "height": defaultHeight,
            "margin-top": 0,
            "padding": 0,
            "border-radius": 8
        }, 200);
    });
});
