var elem = document.querySelector('.sidenav');
var edge  = 'left';
var instance = M.Sidenav.init(elem, edge);

var elemCarousel = document.querySelector('.carousel');
var carousel = M.Carousel.init(elemCarousel,{
    fullWidth: true
  });

  var app = new Vue({
    el: '#app',
    data: {
      nombre: '',
      email: '',
      msj:'',
      alert: false
    },
    methods:{
      enviar: function(){
        if (this.nombre && this.email && this.msj) {
          alert("Enviado");
          this.nombre = "";
          this.email ="";
          this.msj="";
          this.alert = true;

        } else {
          alert("No enviado");
        }
      }
    },
    computed:{
      validar:function(){
        return this.nombre && this.email && this.msj;
      }
    }
    
  })
