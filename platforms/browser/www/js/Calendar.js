var $$ = Dom7;
var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var app = this;

var calendar = app.calendar.create({
    on:{
        opened: function () {
            console.log("calendar opened");
        }
    }
});