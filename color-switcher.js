let title = document.getElementById("title");
let colorinfo = document.getElementById("main-color-info");

let button = document.getElementById("button");

function randomColor(){
  let colorSet = ["red", "blue", "green", "white", "pink", "orange", "yellow", "lawngreen", "aqua", "grey"];
   
   
   let selectedColor = colorSet[(Math.floor(Math.random()*10))]
   return selectedColor;
}



button.addEventListener("click", (cc) => {
    let selectedCC = randomColor();
    document.body.style.background = selectedCC;
    title.style.color = selectedCC;
    button.style.borderColor = selectedCC;
    colorinfo.style.color = selectedCC;
    colorinfo.innerText = selectedCC;
}
)