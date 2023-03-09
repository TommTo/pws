//De tekst voor de knop
const introText = document.getElementsByClassName('start_knop')
//De knop
const startButton = document.getElementById('start_button')
//De tekst na de knop
const simText = document.getElementById('inline')

//reveal the text
function toggleClock(){
    simText.style.display = 'block'
    
}
  //hide the button
function hideButton(x)
{
    x.style.display = 'none'
}


// set up text to print, each item in array is new line
var aText = new Array(
    "Lang geleden, in 1989, een tijd waarin communicatie beperkt was en informatie schaars, ontstond er een visie die de wereld voorgoed zou veranderen. ", 
    "Het was een visie die uitging van de kracht van verbinding, van het samenbrengen van mensen en informatie op een manier die eerder ondenkbaar was.",
    "Zo werd de Wereldwijde Web geboren, een netwerk dat de wereld omarmde en de grenzen van tijd en ruimte deed vervagen.",
    "Het was een revolutie die zijn weerga niet kende.",
    "",
    "In de afgelopen 30 jaar zijn de design trends van interactieve websites heel erg veranderd. Het begon bij simpele websites met alleen maar tekst.",
    "Vervolgens kwamen er steeds meer nieuwe technieken en programma’s uit om alle soorten design trends te ontwikkelen, designs werden ingewikkelder en gedetailleerder",
    "Zo heeft het wereldwijd web de huidige situatie bereikt.",
    "",
    "Onze doel met de volgende simulatie is om de ontwikkelingen in webdesign weer te geven op een schematische wijze.",
    "",
    "Dit is een line-mode browser. Dit is hoe het internet daaruit zag in 1989.",
    "",

    
    );
    var iSpeed = 20; // time delay of print out, zet straks weer op 30
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("inline");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();



    //Make link appear.
    let mainLink = document.getElementById('main_link')
    let time = 30000 // time in milliseconds
    mainLink.hidden = true // set link to hidden on load
    setTimeout(()=> {
      mainLink.hidden = false // after timeout show link
    }, time)

    //Fade In Fade Out animation in JavaScript and CSS if time allows ^^^