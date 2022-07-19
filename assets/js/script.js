if (window.location.search == '?page=3' || window.location.search == '?page=4'){
    $('.bloco').css('background-position', 'right')
}


$('.painel-container button').hover(function (){
    $(this).css('transform', 'scale(2)')
}, function (){
    $(this).css('transform', 'scale(1)')
})

$('.card-sesc').click(function(){
    if($('.card-sesc .active').css('display')=='inline'){
        $('.card-sesc .active').fadeOut()
        $('figcaption.active').fadeOut()
        window.setTimeout(function(){
        $('.card-sesc .hidden').fadeIn()
        $('figcaption.hidden').fadeIn()
    }, 1000)
    } else if($('.card-sesc .hidden').css('display')=='inline'){
        $('.card-sesc .hidden').fadeOut()
        $('figcaption.hidden').fadeOut()
    window.setTimeout(function(){
        $('.card-sesc .active').fadeIn()
        $('figcaption.active').fadeIn()
    }, 1000)
    }
    
})