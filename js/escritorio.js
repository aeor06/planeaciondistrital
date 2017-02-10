/*-----------MENU PEGAJOSO------------*/

var menu = document.getElementById('nav-menu');
var altura = menu.offsetTop;
window.addEventListener('scroll',function(){
 
 if(window.pageYOffset > altura){
  
  menu.classList.add('fixed');
 }
 else {
  menu.classList.remove('fixed')
  
  
 }
 
})

/**-------------FIN DEL MENU PEGAJOSO----------***/