var elem = document.querySelector('.sidenav');
var edge = 'left';
var instance = M.Sidenav.init(elem, edge);

var elemCarousel = document.querySelector('.carousel');
var carousel = M.Carousel.init(elemCarousel, {
    fullWidth: true
});

var collapsible = document.querySelector('.collapsible');
var accordion = true;
var instance = M.Collapsible.init(collapsible, accordion);
var email = document.getElementById("email");
var estado = false;
var app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        email: '',
        msj: '',
        alert: false
    },
    methods: {
        enviar: function () {
            if (this.nombre && this.email && this.msj) {
                    estado=true;


            } else {
                alert("No enviado");
            }
        }
    },
    computed: {
        validar: function () {
            return this.nombre && this.email && this.msj;
        }
    }

})
