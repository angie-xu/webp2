document.body.style.backgroundImage = "url(img/stars.jpg)";
document.body.style.backgroundColor = "black";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


document.getElementById("container").style.color = "white";
document.getElementById("small-container").style.color = "black";


function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("zodiac").value;
    //Displaying the Value on the page
    document.getElementById("div1").innerHTML = "<br>" + inputVal ;

var zodiacsign = inputVal;

if (zodiacsign === 'aries' || zodiacsign ==='Aries') {
console.log('It\'s Aries!');
document.getElementById("div1").innerHTML= "<img src='img/Aries.png'>";

}

else if (zodiacsign === 'taurus' || zodiacsign ==='Taurus') {
console.log('It\'s Taurus!');
document.getElementById("div1").innerHTML= "<img src='img/Taurus.png'>";
}

else if (zodiacsign === 'gemini' || zodiacsign ==='Gemini') {
console.log('It\'s Gemini!');
document.getElementById("div1").innerHTML= "<img src='img/Gemini.png'>";
}

else if (zodiacsign === 'cancer' || zodiacsign ==='Cancer') {
console.log('It\'s Cancer!');
document.getElementById("div1").innerHTML= "<img src='img/Cancer.png'>";
}

else if (zodiacsign === 'leo' || zodiacsign ==='Leo') {
console.log('It\'s Leo!');
document.getElementById("div1").innerHTML= "<img src='img/Leo.png'>";
}

else if (zodiacsign === 'virgo' || zodiacsign ==='Virgo') {
console.log('It\'s Virgo!');
document.getElementById("div1").innerHTML= "<img src='img/Virgo.png'>";
}

else if (zodiacsign === 'libra' || zodiacsign ==='Libra') {
console.log('It\'s Libra!');
document.getElementById("div1").innerHTML= "<img src='img/Libra.png'>";
}

else if (zodiacsign === 'scorpio' || zodiacsign ==='Scorpio') {
console.log('It\'s Scorpio!');
document.getElementById("div1").innerHTML= "<img src='img/Scorpio.png'>";
}

else if (zodiacsign === 'sagittarius' || zodiacsign ==='Sagittarius') {
console.log('It\'s Sagittarius!');
document.getElementById("div1").innerHTML= "<img src='img/Sagittarius.png'>";
}

else if (zodiacsign === 'capricorn' || zodiacsign ==='Capricorn') {
console.log('It\'s Capricorn!');
document.getElementById("div1").innerHTML= "<img src='img/Capricorn.png'>";
}
    
else if (zodiacsign === 'aquarius' || zodiacsign ==='Aquarius') {
console.log('It\'s Aquarius!');
document.getElementById("div1").innerHTML= "<img src='img/Aquarius.png'>";
}
    
else if (zodiacsign === 'pisces' || zodiacsign ==='Pisces') {
console.log('It\'s Pisces!');
document.getElementById("div1").innerHTML= "<img src='img/Pisces.png'>";
}

else{
    document.getElementById("div1").innerHTML = "Not a Zodiac" ;

}

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}