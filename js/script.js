"use strict";

function onBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/on.jpg";
  }
  
  function offBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/off.jpg";
  }


  //Man kunne også tage fat i id'et i vores html og skrive:
  //document.getElementById("onBtn").addEventListener('click', onBulb);
  //addEventListener er en lytter (hvad vil du lytte til)til click

  //eler:
  //  //document.getElementById("offBtn").addEventListener('click', offBulb);
