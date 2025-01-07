let obj = {
  Image1:
    "https://i.pinimg.com/474x/91/c6/ad/91c6ad61f1ef3da414646a531b65bae9.jpg",
  icon1: "ri-toggle-fill",
  Image2: "https://i.pinimg.com/474x/57/cb/34/57cb34f64f2808c5f4f80f09670e3bd3.jpg",
  icon2 : "ri-toggle-line"
};
let img = document.querySelector("img");
let i = document.querySelector("i");

let flap = true;
i.addEventListener("click", function () {
  obj.Image2.width = '200px'
  if (flap) {
    img.src = obj.Image1;
    i.className = obj.icon1;
    flap = false;
  }else{
    img.src = obj.Image2;
    i.className = obj.icon2;
    flap = true; 
  }
});
