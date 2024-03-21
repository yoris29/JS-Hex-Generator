const button = document.querySelector("#button");
const body = document.querySelector("body");
const txt = document.querySelector("h2");
const allHexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function getRandomHexCode() {
      let random = Math.floor(Math.random() * allHexValues.length);
      return allHexValues[random];
 } 
 

button.addEventListener("click", function() {
   let hexString = "#";
   for (let i = 0; i < 6; i++) {
    hexString += getRandomHexCode();
   }
   body.style.backgroundColor = `${hexString}`;
   txt.style.visibility = 'visible'
   txt.innerText = `The Color is: ${hexString}`
});


