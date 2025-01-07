var btns = document.querySelectorAll('button')
var body = document.querySelector('body')

btns.forEach(function(elms){  
   elms.addEventListener('click',function(){
       body.style.backgroundColor = elms.innerHTML;
   })
})