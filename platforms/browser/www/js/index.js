var $$ = Dom7;

function MisClientes() {
    console.log('awa de uwu');
}

var fechas = new Array();
var horas = new Array();

function agregaFecha() {

    var fecha = $$("#date_val").val();
    var cliente = $$("#ClientesName").val();
    var hora = $$("#hora").val();

    if (fecha == "" || hora == "" || cliente == "") {
        alert("¡Esto no puede ir vacío!");
    } else {

        console.log("Fecha " + fecha);
        horas.push(hora);
        console.log("Horas del día" + horas.length);
        fechas.push(fecha);
        console.log("Fechas " + fechas.length);
        $$("#div_salida").html("");

        for (var i = 0; i < fechas.length; i++) {
            $$("#div_salida").append("<li style='color:black; font-size:20px;' id='" + [i] + "'>" + fechas[i] + "        " + horas[i] + "      " + cliente + "<i type='button' class='fas fa-times' style='color:red; float:right;' name='eliminar' id='" + [i] + "'  onClick='eliminarFechas(this.id)'></i><input type='time' id='hora' style='display:none;'/> </li>");
        }
        $$("#date_val").val("");
        $$("#hora").val("");
    }

}
    




function eliminarFechas(X) {

    fechas.splice(X, 1);
    console.log(fechas);
    $$("#div_salida").html("");

    for (var i = 0; i < fechas.length; i++) {
        $$("#div_salida").append("<li style='color:black; font-size:20px;' id='" + [i] + "'>" + fechas[i] + "         " + horas[i] + "      " + cliente + "<i class='fas fa-times' style='color:red; float:right;' name='eliminar' id='" + [i] + "' onClick='eliminarFechas(this.id)'/></i><input type='time' id='hora' style='display:none;'/> </li>");
    }
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Editar() {
    $$('#Guardarbtn').show();
    $$('#Editarbtn').hide();
    $$('#NombreYApellido').prop("disabled", false);
    $$('#NombreYApellido').removeAttr('placeholder');
    $$('#CodigoPostal').prop("disabled", false);
    $$('#CodigoPostal').removeAttr('placeholder');

    console.log("Ora compa :3");
}


//Guardar
function Guardar() {
    $$('#Guardarbtn').hide();
    $$('#Editarbtn').show();
    $$('#NombreYApellido').prop("disabled", true);
    $$('#CodigoPostal').prop("disabled", true);
    console.log($$('#NombreYApellido').val());
    console.log($$('#CodigoPostal').val());


}



function Mostrar1() {
    if ($$('#c1').css('display', 'none')) {
        $$('#c1').show();

    } if ($$('#c1').css('display', 'block')) {
        $$('#c1').hide
    }

}
function Mostrar2() {
    if ($$('#c2').css('display', 'none')) {
        $$('#c2').show();

    } if ($$('#c1').css('display', 'block')) {
        $$('#c2').hide
    }
}
function Mostrar3() {
    if ($$('#c3').css('display', 'none')) {
        $$('#c3').show();

    } if ($$('#c3').css('display', 'block')) {
        $$('#c3').hide
    }
}