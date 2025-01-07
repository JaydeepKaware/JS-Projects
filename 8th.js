var btn = document.querySelector('button')
var body = document.querySelector('body')
var logos = ['https://static.vecteezy.com/system/resources/previews/047/248/575/non_2x/whatsapp-3d-whatsapp-logo-3d-whatsapp-icon-3d-whatsapp-symbol-free-png.png','https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_media___youtube_logo_video_multimedia_stream_download_play_clip.png','https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png','https://static.vecteezy.com/system/resources/previews/024/485/805/non_2x/html-3d-render-cute-icon-illustration-folder-file-format-free-png.png','https://ouch-cdn2.icons8.com/_US60I188UuoRurpJ9lfFmfp5baT-Gtp3bghSn-AOL8/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTI0/L2NjYjgwMjlkLWZh/NWMtNDU5Yy05YjBk/LWI0Yzg2MzI3Zjc0/Mi5wbmc.png']
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NB8FA-NM5rPCYITvFtzlCC3rT0HTg2lGkQ&s
btn.addEventListener('click', function(){
    var img = document.createElement('img')
    var i = Math.floor(Math.random() * logos.length)
    img.setAttribute('src', logos[i])
    
    var valueX = Math.random() * 90;
    var valueY = Math.random() * 90;
    var rotate = Math.random() * 360;

    img.style.width = '90px'
    img.style.position = "absolute"
    img.style.left = valueX + '%'
    img.style.top = valueY + '%'
    img.style.rotate = rotate + 'deg'

    body.appendChild(img);
})