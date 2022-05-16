document.body.style.backgroundImage = "url(img/stars.jpg)";
document.body.style.backgroundColor = "black";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


document.getElementById("container").style.color = "white";
document.getElementById("small-container").style.color = "black";


function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + inputVal ;

var zodiacsign = inputVal;

if (zodiacsign === 'aries' || zodiacsign ==='Aries') {
console.log('It\'s Aries!');
document.getElementById("seasonal").innerHTML= "<img src='img/Aries.png'>";
}

else if (zodiacsign === 'taurus' || zodiacsign ==='Taurus') {
console.log('It\'s Taurus!');
document.getElementById("seasonal").innerHTML= "<img src='img/Taurus.png'>";
}

else if (zodiacsign === 'gemini' || zodiacsign ==='Gemini') {
console.log('It\'s Gemini!');
document.getElementById("seasonal").innerHTML= "<img src='img/Gemini.png'>";
}

else if (zodiacsign === 'cancer' || zodiacsign ==='Cancer') {
console.log('It\'s Cancer!');
document.getElementById("seasonal").innerHTML= "<img src='img/Cancer.png'>";
}

else if (zodiacsign === 'leo' || zodiacsign ==='Leo') {
console.log('It\'s Leo!');
document.getElementById("seasonal").innerHTML= "<img src='img/Leo.png'>";
}

else if (zodiacsign === 'virgo' || zodiacsign ==='Virgo') {
console.log('It\'s Virgo!');
document.getElementById("seasonal").innerHTML= "<img src='img/Virgo.png'>";
}

else if (zodiacsign === 'libra' || zodiacsign ==='Libra') {
console.log('It\'s Libra!');
document.getElementById("seasonal").innerHTML= "<img src='img/Libra.png'>";
}

else if (zodiacsign === 'scorpio' || zodiacsign ==='Scorpio') {
console.log('It\'s Scorpio!');
document.getElementById("seasonal").innerHTML= "<img src='img/Scorpio.png'>";
}

else if (zodiacsign === 'sagittarius' || zodiacsign ==='Sagittarius') {
console.log('It\'s Sagittarius!');
document.getElementById("seasonal").innerHTML= "<img src='img/Sagittarius.png'>";
}

else if (zodiacsign === 'capricorn' || zodiacsign ==='Capricorn') {
console.log('It\'s Capricorn!');
document.getElementById("seasonal").innerHTML= "<img src='img/Capricorn.png'>";
}
    
else if (zodiacsign === 'aquarius' || zodiacsign ==='Aquarius') {
console.log('It\'s Aquarius!');
document.getElementById("seasonal").innerHTML= "<img src='img/Aquarius.png'>";
}
    
else if (zodiacsign === 'pisces' || zodiacsign ==='Pisces') {
console.log('It\'s Pisces!');
document.getElementById("seasonal").innerHTML= "<img src='img/Pisces.png'>";
}

else{
    document.getElementById("display").innerHTML = "Not a Zodiac" ;

}


}