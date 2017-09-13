'use strict';
var cambioVistas = {
    init: function(){
        cambioVistas.setup();
    },
    setup: function(){
        $('#seccion').click(cambioVistas.Seccion);
        $('#siguiente').click(cambioVistas.Siguiente);
        $('#mapa').click(cambioVistas.mapa);
    }, 
    Seccion : function(){
        document.location.href = "C:/LABORATORIA/SPRINT 4/Lyft-Car/sign.html";
    },
    Siguiente : function(){
        document.location.href = "C:/LABORATORIA/SPRINT 4/Lyft-Car/registro.html";
    },
    mapa : function(){
        document.location.href = "C:/LABORATORIA/SPRINT 4/Lyft-Car/mapa.html";
    }
}
$(document).ready(cambioVistas.init);
