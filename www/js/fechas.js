

function Mostrar() {
    $$(this).append("<li class='NPC' id='NPC" + $$(this).parent().attr('id') + "'><input type='time' id='hora'/><i class='fas fa-plus'></i></li> ")
}


function A�adirhora() {
    var hora = $$("#hora").val();
    if (hora == "") {
        alert("Esto no puede ir vac�o");
    } else {
        console.log("Hora" + j + hora);
        citas.push(hora);
        console.log("Horas del d�a" + citas.length);

        for (var j = 0; j < fechas.length; j++) {
            $$(this).parent().append("<li id='" + [j] + "'>" + citas[j] + "" + "</li>")
        }

    }

}
