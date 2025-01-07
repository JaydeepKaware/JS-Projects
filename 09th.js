var body = document.querySelector('body')
var mouse = document.querySelector('#cursor')
var h1 = document.querySelector('h1')

body.addEventListener('mousemove',function (dets) {
    mouse.style.left = dets.x + 'px'
    mouse.style.top = dets.y + 'px'
    h1.style.color = 'lightseagreen'
})

h1.addEventListener('mouseenter',function(){
    mouse.style.scale =  4

})

h1.addEventListener('mouseleave',function(){
    mouse.style.scale =  1
})