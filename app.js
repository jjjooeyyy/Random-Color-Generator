/* const colorBox = document.getElementById("color-box");
const colorHex = document.getElementById("color-hex");
const generateButton = document.getElementById("generate-button");

function generateColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hexCode = "#" + randomColor;
  colorBox.style.backgroundColor = hexCode;
  colorHex.textContent = hexCode;
  document.documentElement.style.backgroundColor = hexCode;
}

function copyColor() {
  const hexCode = colorHex.textContent;
  const textarea = document.createElement("textarea");
  textarea.value = hexCode;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

generateButton.addEventListener("click", generateColor);

colorHex.addEventListener("click", function() {
  copyColor();
});
 */

"use strict"

let choice = "0123456789ABCDEF"; 
let color = "#";


// Add click action
document.querySelector('button').addEventListener('click', generateColor);

// To generate random color and update display
function generateColor() {
    let choice = "0123456789ABCDEF"; 
    let color = "#";

    for (var i=0;i<6;i++) {
        // generate 6 letter each time for random color
           color = color + choice[(Math.floor(Math.random()*16))]; // random 16 choices between the choice string
          }

   document.querySelector('#color').textContent = `Background Color : ${color}`;
    document.querySelector('body').style.backgroundColor = color;
}