// Criar um objeto HTML { "25-04-2022": ["texto 1", "texto 2", "texto 3"]}
// salvar em localstorage todas as datas com seus conteúdos
// Atualizar a linha do tempo

$(function () {
    $("#app-linhadotempo").css("height", $("#app-linhadotempo").height());

    let eventos = new Object();
    let eventos_id = new Array();
  
    $(".btn-lt-primary").click(function () {
        let data = new Date(parseDate($(".in-data").val()));
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth()).padStart(2, '0');
        const ano = data.getFullYear();
        const escapeHtml = (unsafe) => {
            return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
        }

        const texto = escapeHtml($(".in-texto").val())

        if(eventos[Number(ano+""+mes+""+dia)] != null){
            eventos[Number(ano+""+mes+""+dia)].push(texto)
            
        }else 
        {
            eventos[Number(ano+""+mes+""+dia)] = new Array();
            eventos[Number(ano+""+mes+""+dia)].push(texto);
            eventos_id.push(ano+""+mes+""+dia);

        }

       
        eventos_id.sort(function compararNumeros(a, b) {
            return a - b;
        });
      
        atualizar_LT();
        $(".in-data").val("")
        $(".in-texto").val("")
    });

    $("body").on("click",".lt-excluir-data", function (){
        var  id_remover= $(this).parents(".lt-conteudo").children().children(".lt-data").children("strong").text().replace(" ","");
        
        //$(this).parents(".lt-conteudo").remove();
        let ano = id_remover.split("/")[2]
        let mes = id_remover.split("/")[1]
        let dia = id_remover.split("/")[0]
            id_remover_tratado = Number(ano+""+mes+""+dia)
        delete eventos[id_remover_tratado];
        
        const index = eventos_id.indexOf(""+id_remover_tratado+"");
        if (index > -1) { // only splice array when item is found
            eventos_id.splice(index, 1); // 2nd parameter means remove one item only
        }

        atualizar_LT();
       
    });



// parse a date in yyyy-mm-dd format
function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1], parts[2]); // months are 0-based
}

function atualizar_LT(){
    $("#lt-conteudo-dinamico div").remove();
    $("#app-linhadotempo").css("height","");
    $("#lt-linha").removeClass("d-none")
    eventos_id.forEach(function (a,b){
        let position1 = 6;
        let position2 = 4;
        let separador = "-";
        let data_parsed = [a.slice(0, position1), separador, a.slice(position1)].join('');
            data_parsed = [data_parsed.slice(0, position2), separador, data_parsed.slice(position2)].join('');
       
        let d = new Date(parseDate(data_parsed));
        const dia = String(d.getDate()).padStart(2, '0');
        const mes = String(d.getMonth()).padStart(2, '0');
        const ano = d.getFullYear();

        let data = dia+"/"+mes+"/"+ano;
        let esqDir;
        if(b%2 === 0) {
            esqDir = "lt-esq";
        }else{
            esqDir = "lt-dir";
        }
        template(esqDir,data,eventos[a]);
    });    
    $("#app-linhadotempo").css("height", $("#app-linhadotempo").height());
    if(Object.keys(eventos).length > 0) {    
        $("#lt-baixar").prop("disabled","");
    }else{
        $("#lt-baixar").prop("disabled",true);
        
    }
}

function template(esqDir, data, texto){
    if(texto != undefined){
    let divLTconteudo = $("<div></div>").addClass("lt-conteudo")
    let divLTesqDir = $("<div></div>").addClass(esqDir);
    let divLTdata = $("<div></div>").addClass("lt-data");
    let divLTtexto = $("<div></div>").addClass("lt-texto");

    divLTdata.append("<strong>"+data+" <button type='button' class='lt-excluir-data'><i class='fa fa-times' aria-hidden='true'></i></button></strong>");
    
    texto.forEach(function (a,b){
        divLTtexto.append($("<hr>"));
        divLTtexto.append(a);
    });

    divLTesqDir.append(divLTdata);
    divLTesqDir.append(divLTtexto);
    divLTconteudo.append(divLTesqDir);
    
    $("#lt-conteudo-dinamico").append(divLTconteudo);
}

   }

function salvar_LT(){

}
});




const nomeArquivo = 'linhadotempo.png'
    document.querySelector('#lt-baixar').addEventListener('click', function(){
    html2canvas(document.querySelector('#app-linhadotempo')).then(function(canvas){
        var img = canvas.toDataURL('image/png').replace("imga/png", 'image/octet-stream');
        var alink = document.createElement('a');
        alink.setAttribute('download',nomeArquivo);
        alink.href = img;
        alink.click();       
    })
})