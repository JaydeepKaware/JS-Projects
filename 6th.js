var btn = document.querySelector('button')
var h1 = document.querySelector("h1")
var growth = document.querySelector("#grow")
var h2 = document.querySelector('h2')

var grow = 0
var speed = Math.floor(Math.random() * 100)

btn.addEventListener('click',function() {
    var stop = setInterval(function() {
        grow++
        h1.innerHTML = grow + '%'
        growth.style.width = grow + '%'
    }, speed);

    setTimeout(function () {
        clearInterval(stop)
        btn.style.opacity = 0.7
        btn.style.pointerEvents = 'none'
        h2.innerHTML = `Your file is downloaded in ${speed/10} seconds`
    },speed*100)
})

