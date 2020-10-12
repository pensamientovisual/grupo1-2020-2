$(document).ready(function(){
  var comunas = $(".comuna");

  comunas.mouseenter(function(){
    var idComuna = $(this).attr("id");
    $("#titulo").text(idComuna);
    $(this).fadeTo("fast", 0.5);
  });

  comunas.mouseleave(function(){
    $("#titulo").text("Aprieta la comuna que desees analizar");
    $(this).fadeTo("fast", 1);
  });

  comunas.click(function() {
    var idComuna = $(this).attr("id");
    $("#lista").append(idComuna);
    
  })

});