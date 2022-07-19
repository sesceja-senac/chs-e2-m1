$('.painel-container button').hover(function (){
    $(this).css('transform', 'scale(2)')
}, function (){
    $(this).css('transform', 'scale(1)')
})

$('.card-sesc').click(function(){
    $('.card-sesc .active').fadeOut()
    window.setTimeout(function(){
        $('.card-sesc .hidden').fadeIn()
    }, 1000)
})