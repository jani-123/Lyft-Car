'use strict';
var mapas = {
    init: function(){
        mapas.setup();
    },
    setup: function(){
        $('#seccion').click(mapas.Seccion);
        $('#siguiente').click(mapas.Siguiente);
        $('#mapa').click(mapas.mapa);
    },
    Seccion : function(){
        alert("sd");
        document.location.href = "C:/LABORATORIA/SPRINT 4/Lyft-Car/sign.html";
    },
    Siguiente : function(){
        alert("sd");
        document.location.href = "C:/LABORATORIA/SPRINT 4/Lyft-Car/registro.html";
    },
    mapa : function(){
        alert("sd");
        document.location.href = "C:/LABORATORIA/SPRINT 4/Lyft-Car/mapa.html";
    }


}
