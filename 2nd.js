var btn = document.querySelector("button")
var h2 = document.querySelector("h2")

var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        h2.innerHTML = "Freind"
        h2.style.color = "Green"
        btn.innerHTML = "Remove"
        flag = -1;
    }
    else{
        h2.innerHTML = "Stranger"
        h2.style.color = ` rgb(133, 37, 18)`
        btn.innerHTML = "Add Friend"
        flag = 0;
    }
})

