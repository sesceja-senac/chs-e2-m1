$(function (){
  
   $("[data-id='pin1']").click(function (){
        $("#secao1").fadeOut("slow");
    
   });
   $("[data-id='pin2']").click(function (){
        $("#secao2").fadeOut("slow");
    
   });
   $("[data-bs-toggle='modal']").click(function (){
        $("#app-parque").addClass("blur")
   });
   $("[data-bs-dismiss='modal']").click(function (){
        setTimeout(() => {
            $("#app-parque").removeClass("blur")
        }, 300);
   });

  

});

//Responsive Scaling
let outer = document.getElementById('app-parque'),
wrapper = document.getElementById('wrap'),
maxWidth  = outer.clientWidth,
maxHeight = outer.clientHeight;

window.addEventListener("resize", resize);
resize();

function resize(){
let scale,
width = window.innerWidth,
height = window.innerHeight,
isMax = width >= maxWidth && height >= maxHeight;

scale = Math.min(width/maxWidth, height/maxHeight);
outer.style.transform = isMax?'':'scale(' + scale + ')';
wrapper.style.width = isMax?'':maxWidth * scale;
wrapper.style.height = isMax?'':maxHeight * scale;
}