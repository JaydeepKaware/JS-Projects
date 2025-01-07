var arr = [
    {
        Image: 'https://i.pinimg.com/474x/49/a8/42/49a8427b5cfcd7d6c2a0508eb1a8fbfb.jpg',
        name : 'Jaydeep',
        age: 25,
        city: 'Delhi'
    },
    {
       Image : 'https://i.pinimg.com/474x/35/e7/71/35e7710a45b5e0ef5b7ec91de562f1e4.jpg',
       name : 'Suraj',
       age: 30,
       city: 'Mumbai' 
    },
    {
       Image: 'https://i.pinimg.com/474x/9d/6b/2b/9d6b2b19aaa371fe3b98be04435a6300.jpg',
       name : 'Deepanshu',
       age: 28,
       city: 'Banglore' 
    }
]

var container = ``
arr.forEach(function(elem){
    container += `<div class="card">
        <img src="${elem.Image}" alt=""> 
        <h1>${elem.name}</h1>
        <h3>${elem.age},${elem.city}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, officiis?</p>
    </div>`
})

var body = document.querySelector('body')
body.innerHTML = container
