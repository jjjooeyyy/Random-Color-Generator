

"use strict"

let choice = "0123456789ABCDEF"; 
let color = "#";
const popMsg = document.querySelector('#pop-msg');

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

   document.querySelector('span').textContent = color;
   document.querySelector('body').style.backgroundColor = color;
   popMsg.textContent = '';
}

// Use Clipboard API to copy hexcode on click!
async function copyHexCode() {
const color = document.querySelector('span').textContent;
try {
  await navigator.clipboard.writeText(color);
  console.log(`Copied ${color} to clipboard!`);
  popMsg.textContent = `${color} is copied to your clipboard! Try it now 🎨`
} catch (error) {
  console.error(`Error copying ${color} to clipboard: ${error}`);
}
}

document.querySelector('span').addEventListener('click', function() {
  copyHexCode();
})