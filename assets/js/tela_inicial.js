$('.background-2').hide()
var bg=1
window.setInterval(function(){
    if(bg==1){
        $('.background-1').fadeOut(2000)
        $('.background-2').fadeIn(2000)
        $('.menu-container').removeClass('darker')
        bg=2
        console.log(bg)
    } else {
        $('.background-2').fadeOut(2000)
        $('.background-1').fadeIn(2000)
        $('.menu-container').addClass('darker')
        bg=1
        console.log(bg)
    }
}, 15000)