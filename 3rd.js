let box = document.querySelector(".box");

box.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})