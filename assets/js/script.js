$(document).ready(function() {   
    AOS.init();
})

if (window.location.search == '?page=2' || window.location.search == '?page=4' || window.location.search == '?page=5'){
    $('.bloco').css('background-position', 'right')
    $('footer').css('background-position', 'right')
}
if (window.location.search == '?page=2'){
    $('footer').css('background-color', 'white')
}
if (window.location.search == '?page=3'){
    $('footer').css('background-color', '#004f53')
}
if (window.location.search == '?page=4'){
    $('footer').css('background-color', '#ff9200')
}

$('.painel-container button').hover(function (){
    $(this).css('transform', 'scale(2)')
}, function (){
    $(this).css('transform', 'scale(1)')
})

$('.card-sesc').click(function(){
    if($('.card-sesc .active').css('display')!=='none'){
        $('.card-sesc .active').fadeOut()
        $('figcaption.active').fadeOut()
        window.setTimeout(function(){
        $('.card-sesc .hidden').fadeIn()
        $('figcaption.hidden').fadeIn()
    }, 500)
    } else if($('.card-sesc .hidden').css('display')!=='none'){
        $('.card-sesc .hidden').fadeOut()
        $('figcaption.hidden').fadeOut()
    window.setTimeout(function(){
        $('.card-sesc .active').fadeIn()
        $('figcaption.active').fadeIn()
    }, 500)
    }
    
})

$('.mapa-bt-1').hover(function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa-bt-1.png")')
}, function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa.png")')
})
$('.mapa-bt-2').hover(function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa-bt-2.png")')
}, function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa.png")')
})
$('.mapa-bt-3').hover(function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa-bt-3.png")')
}, function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa.png")')
})
$('.mapa-bt-4').hover(function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa-bt-4.png")')
}, function(){
    $('.objeto-mapa-pg5').css('background-image', 'url("img/pagina5/pg5-mapa.png")')
})
$('.mapa-modal').hide()
$('.mapa-bt-1').click(function(){
    if($('.mapa-modal-1').css('display') !== 'block'){
        $('.mapa-modal').fadeOut()
        $('.mapa-bt p').fadeOut()
        $('.mapa-modal-1').fadeIn()
        $('.mapa-bt-1 p').fadeIn()
    } else {
        $('.mapa-modal-1').fadeOut()
        $('.mapa-bt-1 p').fadeOut()
    }
})
$('.mapa-bt-2').click(function(){
    if($('.mapa-modal-2').css('display') !== 'block'){
        $('.mapa-modal').fadeOut()
        $('.mapa-bt p').fadeOut()
        $('.mapa-modal-2').fadeIn()
        $('.mapa-bt-2 p').fadeIn()
    } else {
        $('.mapa-modal-2').fadeOut()
        $('.mapa-bt-2 p').fadeOut()
    }
})
$('.mapa-bt-3').click(function(){
    if($('.mapa-modal-3').css('display') !== 'block'){
        $('.mapa-modal').fadeOut()
        $('.mapa-bt p').fadeOut()
        $('.mapa-modal-3').fadeIn()
        $('.mapa-bt-3 p').fadeIn()
    } else {
        $('.mapa-modal-3').fadeOut()
        $('.mapa-bt-3 p').fadeOut()
    }
})
$('.mapa-bt-4').click(function(){
    if($('.mapa-modal-4').css('display') !== 'block'){
        $('.mapa-modal').fadeOut()
        $('.mapa-bt p').fadeOut()
        $('.mapa-modal-4').fadeIn()
        $('.mapa-bt-4 p').fadeIn()
    } else {
        $('.mapa-modal-4').fadeOut()
        $('.mapa-bt-4 p').fadeOut()
    }
})