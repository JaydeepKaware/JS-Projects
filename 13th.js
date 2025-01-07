const Users = [
  {
    name: "Tony Stark",
    TimeRanges: "5 min ago",
    Image:
      "https://i.pinimg.com/474x/78/24/a8/7824a8b5a379a5f7829f7812574dbffc.jpg",
    story:
      "https://i.pinimg.com/474x/ca/99/e3/ca99e3d8be8c8b58202777af88becd1c.jpg",
  },
  {
    name: "Jusprit Bumrah",
    TimeRanges: "20 min ago",
    Image:
      "https://i.pinimg.com/736x/a1/64/fb/a164fb66a36bf4fc7765e37f31edd876.jpg",
    story:
      "https://i.pinimg.com/736x/04/34/b8/0434b8a1cc08d1e9c611253c17761fe3.jpg",
  },
  {
    name: "Rohan Desai",
    TimeRanges: "45 min ago",
    Image:
      "https://i.pinimg.com/474x/bf/32/03/bf320346f96b016b35c70d71ced1c532.jpg",
    story:
      "https://i.pinimg.com/474x/6e/2b/61/6e2b61dd1fc753aa325d07eb7ca21fbd.jpg",
  },
  {
    name: "Virat Kohli",
    TimeRanges: "1 hour ago",
    Image:
      "https://i.pinimg.com/474x/02/b6/d0/02b6d0a0b35dfb55724795fb8446228d.jpg",
    story:
      "https://i.pinimg.com/736x/e7/eb/c4/e7ebc4fac063b171a754fc31273f6433.jpg",
  },
  {
    name: "Ananya Gupta",
    TimeRanges: "2 hours ago",
    Image:
      "https://i.pinimg.com/474x/69/53/1f/69531f497f15e53e568bb1c314a0f39b.jpg",
    story:
      "https://i.pinimg.com/736x/2f/9c/19/2f9c19fce11c062d0c97cb9aa0495116.jpg",
  },
  {
    name: "Priya Nair",
    TimeRanges: "6 hours ago",
    Image:
      "https://i.pinimg.com/474x/e5/1e/65/e51e65d4d548baad8efb9df0af34b575.jpg",
    story:
      "https://i.pinimg.com/474x/53/a0/7f/53a07f9f0d7f1b7b1cf02adffbf1aa2c.jpg",
  },
  {
    name: "Yash",
    TimeRanges: "14 hours ago",
    Image:
      "https://i.pinimg.com/474x/b5/8f/37/b58f3788a87ee5d181659e464b108f78.jpg",
    story:
      "https://i.pinimg.com/736x/f4/63/42/f46342a58907ce44c7b217080ef1669b.jpg",
  },
  {
    name: "Cristiano ronaldo",
    TimeRanges: "19 hours ago",
    Image:
      "https://i.pinimg.com/474x/f4/8d/35/f48d357a2b598007d083324f9bbb4cc2.jpg",
    story:
      "https://i.pinimg.com/474x/35/96/e5/3596e50be4a990870e7dde14f9d72c85.jpg",
  },
  {
    name: "Vijay thalapathy",
    TimeRanges: "1 day ago",
    Image:
      "https://i.pinimg.com/474x/be/67/c1/be67c1818b8c8c9501a97e9e939ee23a.jpg",
    story:
      "https://i.pinimg.com/736x/2d/a0/12/2da0123a141f61fa49af0b9cea7257d8.jpg",
  },
  {
    name: "John Joseph",
    TimeRanges: "2 day ago",
    Image:
      "https://i.pinimg.com/736x/b6/3d/9e/b63d9ed8c3f050684d41bca14e7279fc.jpg",
    story:
      "https://i.pinimg.com/736x/f4/7e/7e/f47e7e369a7259674a62e7a689743af9.jpg",
  },
];

var sum = "";

Users.forEach(function (elem, index) {
  sum += `<div class="story">
               <img id=${index} src=${elem.Image} alt="">
          </div>`;
});

const storiyan = document.querySelector("#storiyan");
storiyan.innerHTML = sum;
var full = document.querySelector(".full");
var img = document.querySelector(".full img");
var h3 = document.querySelector(".full h3");
var h5 = document.querySelector(".full h5");

storiyan.addEventListener("click", function (dets) {
  var grow = 0;
  var value = Users[dets.target.id];

  var stop = setInterval(function () {
    grow++;
    growth.style.width = grow + "%";
  }, 30);

  full.style.display = `block`;
  full.style.backgroundImage = `url(${value.story})`;
  img.setAttribute("src", `${value.Image}`);
  h3.innerHTML = ` ${value.name}`;
  h5.innerHTML = ` ${value.TimeRanges}`;
  
  setTimeout(function () {
    full.style.display = `none`;
    clearInterval(stop);
  }, 3000);
});
