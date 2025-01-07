let box = document.querySelector("#card");
let h4 = document.querySelector("h4");

box.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    h4.innerHTML = r;
})