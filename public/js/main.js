var elem = document.querySelector('.sidenav');
var edge  = 'left';
var instance = M.Sidenav.init(elem, edge);
instance.open();


var elemCarousel = document.querySelector('.carousel');
var carousel = M.Carousel.init(elemCarousel,{
    fullWidth: true
  });
