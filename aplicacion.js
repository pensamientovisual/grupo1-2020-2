$(document).ready(function(){
  var comunas = $(".comuna");

  var previousClicked = null;

  comunas.mouseenter(function(){
    var idComuna = $(this).attr("id");
    
    if (previousClicked == null) {
      $("#titulo").text(idComuna);
    }

    if (this != previousClicked) {
      $(this).fadeTo("fast", 0.5);
    }
  });

  comunas.mouseleave(function(){
    if (previousClicked == null) {
      $("#titulo").text("Selecciona una comuna");
    }

    if (this != previousClicked) {
      $(this).fadeTo("fast", 1);
    }
  });

  comunas.click(function() {
    if (previousClicked != null) {
      $(previousClicked).css('opacity', '1.0');
    }

    var idComuna = $(this).attr("id");
    $('#titulo').text(idComuna);
    $(this).css('opacity', '0.5');
    $("#info").attr("src", 'info/' + idComuna + '.jpeg');
    previousClicked = this;
  })

  $('#select1').change(function(){
    var img = $(this).val();
    if (img !== "Comuna...") {
      $("#info1").attr("src", 'info/' + $(this).val() + '.jpeg');
    } else {
      $("#info1").attr("src", 'info/base.jpeg');
    }
  })

  $('#select2').change(function(){
    var img = $(this).val();
    if (img !== "Comuna...") {
      $("#info2").attr("src", 'info/' + $(this).val() + '.jpeg');
    } else {
      $("#info2").attr("src", 'info/base.jpeg');
    }
  })
});