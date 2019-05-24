

function Mostrar() {
    $$(this).append("<li class='NPC' id='NPC" + $$(this).parent().attr('id') + "'><input type='time' id='hora'/><i class='fas fa-plus'></i></li> ")
}


function Añadirhora() {
    var hora = $$("#hora").val();
    if (hora == "") {
        alert("Esto no puede ir vacío");
    } else {
        console.log("Hora" + j + hora);
        citas.push(hora);
        console.log("Horas del día" + citas.length);

        for (var j = 0; j < fechas.length; j++) {
            $$(this).parent().append("<li id='" + [j] + "'>" + citas[j] + "" + "</li>")
        }

    }

}
