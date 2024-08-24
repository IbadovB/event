
const box = document.querySelector(".box")
document.querySelector("body").style.margin = "50px"
document.querySelector(".box").style.width = "100px"
document.querySelector(".box").style.height = "100px"
document.querySelector(".box").style.border = "2px, solid, black"
document.querySelector(".box").style.marginTop = "10px"
document.querySelector(".box").style.background = "green"






document.querySelector(".box").addEventListener("mouseover", mouseOver);
document.querySelector(".box").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector(".box").style.color = "red";
  document.querySelector(".box").style.background = "blue";
  document.querySelector(".box").innerHTML = "mouse is over"
  const newBox = document.createElement("div")
  newBox.innerText = "new text"
  document.body.appendChild(newBox)

}

function mouseOut() {
  document.querySelector(".box").style.color = "yellow";
  document.querySelector(".box").style.background = "grey";
  document.querySelector(".box").innerHTML = "mouse is out"
}


