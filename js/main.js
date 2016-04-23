var now = new Date();
var h = now.getHours();

var hNight = SummerHour();

if(h >= hNight || h < 7) {
   $(function(){
      $("head").append(
        $(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"./css/nuit.css"})
      );
    });

    $( "body" ).append( '<img class="lune" src="img/lune.png" alt="Lune" />');
    $( "body" ).append( '<span class="filante etoile">*</span>');

    nuit();
} else {
    $(function(){
      $("head").append(
        $(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"./css/jour.css"})
      );
    });

    $( "body" ).append( '<div class="soleil"></div>');
    $( "body" ).append( '<img src="./img/mgf.png" alt="Mongolfière" class="mgf"/>');

    jour();
}
