
//Almacenar Slider en una variable
var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');

//Mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD(){

slider.animate({marginLeft:'-'+200+'%'},700, function(){

$('#slider section:first').insertAfter('#slider section:last');
slider.css('margin-left', '-'+100+'%');	

});

}

function moverI(){

slider.animate({marginLeft:0},700, function(){
$('#slider section:last').insertBefore('#slider section:first');
slider.css('margin-left', '-'+100+'%');	


});

}

siguiente.on('click' ,function(){
moverD();
});

anterior.on('click' ,function(){
moverI();
});

function autoplay(){

interval = setInterval(function(){
moverD();

},5000);

}

autoplay();



var menu = document.getElementById('menu');
var altura = menu.offsetTop;
window.addEventListener('scroll',function(){
 
 if(window.pageYOffset > altura){
  
  menu.classList.add('fixed');
 }
 else {
  menu.classList.remove('fixed')
  
  
 }
 
})


