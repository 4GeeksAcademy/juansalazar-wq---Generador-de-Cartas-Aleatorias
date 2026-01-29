import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  let cardTop = document.querySelector("#card-top")
  let cardMiddle = document.querySelector("#card-middle")
  let cardBottom = document.querySelector("#card-botton")
  let pintas = ["♦", "♥", "♠","♣"]
  let numeros = [ "A",2,3,4,5,6,7,8,9,"J","K","Q"]

  let randomNumeros = Math.floor(Math.random() * numeros.length)
      cardMiddle.textContent = numeros[randomNumeros]

  let randomPintas = Math.floor(Math.random() * pintas.length)
      cardTop.textContent = pintas[randomPintas]
      cardBottom.textContent = pintas [randomPintas]

  if (pintas[randomPintas]== "♦"|| pintas [randomPintas] == "♥"){
      cardTop.style.color = "red"
      cardBottom.style.color = "red"
      cardMiddle.style.color = "red"
  }    

};
