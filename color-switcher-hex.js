let title = document.getElementById("title");
let colorinfo = document.getElementById("main-color-info");

let button = document.getElementById("button");



function randomColor(){
    const colorOption = [0,1,2,3,4,5,6,7,8,9,"a", "b", "c", "d",
"e", "f"];
   let color = "#";
for(let i = 0; i<6; i++){
    color += colorOption[(Math.floor(Math.random()*16))];
}
return color;
}


button.addEventListener("click", (cc) =>{
    let selectedCC = randomColor();
    document.body.style.background = selectedCC;
    title.style.color = selectedCC;
    button.style.borderColor = selectedCC;
    colorinfo.style.color = selectedCC;
    colorinfo.innerText = selectedCC;
     
}
)