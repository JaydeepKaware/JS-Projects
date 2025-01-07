var btn = document.querySelector("button")
var h2 = document.querySelector("h2")

var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        h2.innerHTML = "Requset sending..."
        h2.style.color = "brown"
        btn.innerHTML = "Adding..."
    
    setTimeout(function (){
        h2.innerHTML = "Friend"
        h2.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1;
    },3000) }
    
    else{
        // h2.innerHTML = "Stranger"
        // h2.style.color = ` rgb(133, 37, 18)`
        // btn.innerHTML = "Add Friend"
        // flag = 0;
        h2.innerHTML = "Removing..."
        h2.style.color = "crimson"
        btn.innerHTML = "Remove"

        setTimeout(function (){
            h2.innerHTML = "Stranger"
            h2.style.color = "brown"
            btn.innerHTML = "Add Friend"
            flag = 0;
        },3000) 

    }
})

