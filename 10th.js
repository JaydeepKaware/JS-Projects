var moveX = 0
var moveY = 0
var img = document.querySelector('img')
var body = document.querySelector('body')

document.addEventListener('keydown',function(dets){
    if(dets.code == 'ArrowRight' && moveX <= 84){
        moveX++
        img.style.left = moveX + '%'
    }
    else if(dets.code == 'ArrowLeft' && moveX >=0){
        moveX--
        img.style.left = moveX + '%'
    }
    else if(dets.code == 'ArrowDown' && moveY <= 62){
        moveY++
        img.style.top = moveY + '%'
    }
    else if(dets.code == 'ArrowUp' && moveY >= 0){
        moveY--
        img.style.top = moveY + '%'
    }
    else{
         console.log("Other key pressed");
    }
      
})