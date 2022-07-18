
var cards = [
    {
        'par':'1',
        'conteudo':'lorem'
    },
    {
        'par':'1',
        'conteudo':'lorem'
    },
    {
        'par':'2',
        'conteudo':'lorem'
    },
    {
        'par':'2',
        'conteudo':'lorem'
    },
    {
        'par':'3',
        'conteudo':'lorem'
    },
    {
        'par':'3',
        'conteudo':'lorem'
    },
    {
        'par':'4',
        'conteudo':'lorem'
    },
    {
        'par':'4',
        'conteudo':'lorem'
    },
    {
        'par':'5',
        'conteudo':'lorem'
    },
    {
        'par':'5',
        'conteudo':'lorem'
    },
    {
        'par':'6',
        'conteudo':'lorem'
    },
    {
        'par':'6',
        'conteudo':'lorem'
    },
    {
        'par':'7',
        'conteudo':'lorem'
    },
    {
        'par':'7',
        'conteudo':'lorem'
    },
    {
        'par':'8',
        'conteudo':'lorem'
    },
    {
        'par':'8',
        'conteudo':'lorem'
    },
    {
        'par':'9',
        'conteudo':'lorem'
    },
    {
        'par':'9',
        'conteudo':'lorem'
    },
    {
        'par':'10',
        'conteudo':'lorem'
    },
    {
        'par':'10',
        'conteudo':'lorem'
    },
    {
        'par':'1',
        'conteudo':'lorem'
    },
];
$(".cartaMemoria").click(function(){
    var cartaAtual = $(this);

    if(cartaAtual.hasClass("acertou") || cartaAtual.hasClass("errou")){

    }else{
        $(this).toggleClass("flip");
        if($(".flip").length > 1)
            validaMemoria();
    }
    // window.setTimeout(function(){
    //     $('.card-sesc .hidden').fadeIn()
    // }, 1000)
})
function validaMemoria(){
    var flip = $(".flip");
    var carta0 = flip[0];
    var carta1 = flip[1];
    
    if($(carta0).data( "par" ) == $(carta1).data( "par" )){
        console.log($(carta0).data( "par" ) +"__"+ $(carta1).data( "par" ));
        $(".flip").addClass("acertou");
        $(flip).removeClass("flip");

    }else{
        $(".flip").addClass("errou");
            window.setTimeout(function(){
                $(flip).removeClass("flip");
                $(flip).removeClass("errou");
            }, 1500)
    }



    // console.log(cards);
    // console.log(Object.values(Object.values(cards)[0])[0]);
    // console.log(Object.values(Object.values(cards)[0])[1]);
    // console.log(Object.values(Object.values(cards)[1])[0]);
    // console.log(Object.values(Object.values(cards)[0])[1]);

}