const button = document.getElementById("sunlight");
const body = document.body;

const colors = ['black', '#F2E7D2'];

body.style.backgroundColor = colors[0];

button.addEventListener('click', changeBackground)

function changeBackground() {
  const colorsIndex = Math.floor(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorsIndex];
}

function getInputValue(){
          // Selecting the input element and get its value
          var inputName = document.getElementById("myName").value;
          var inputNameBad = inputName;
          if (inputName === "") {
            inputNameBad = "HEY YOU WITH THE NO NAME, ";
            inputName = "Human";
          } else {
            inputNameBad = inputName + ", ";
          }
          var inputVal= document.getElementById("myInput").value;
          //Displaying the Value on the page
          document.getElementById("display").innerHTML = "<br>" ;

var value = inputVal;
var element = inputName;

//&&
if (value === '0' || value ==='zero' || value ==='Zero') {
document.getElementById("fortune").innerHTML = (inputNameBad + "You will be cursed with minor misfortunes throughout the day").toUpperCase();
zero = document.getElementById("fortune").style;
 zero.fontSize = 30 + "px";
 zero.color="red";
 zero.backgroundColor="#f7d8c3";
 zero.border="15px double white";
}

 else if (value === '1' || value ==='one' || value ==='One') {
document.getElementById("fortune").innerHTML= inputName + ", all things will go well for you. The people around you look at you in satisfaction. You experience no conflicts, only infinite joy and happiness.";
one = document.getElementById("fortune").style;
 one.fontSize = 25 + "px";
 one.color="black";
 one.backgroundColor="#ffc8c3";
 one.border="15px double white";
}

 else if (value === '2' || value ==='two' || value ==='Two') {
document.getElementById("fortune").innerHTML= (inputNameBad + "Be cautious to avoid hidden danger.").toUpperCase();
two = document.getElementById("fortune").style;
 two.fontSize = 30 + "px";
 two.color="red";
 two.backgroundColor="#dcd9f8";
 two.lineHeight="30px";
 two.border="15px double white";
}

else if (value === '3' || value ==='three' || value ==='Three') {
document.getElementById("fortune").innerHTML= inputName + ", all the battles you fight will be won. Be confident and look ahead.";
three = document.getElementById("fortune").style;
 three.fontSize = 25 + "px";
 three.color="black";
 three.backgroundColor="#bccef4";
 three.border="15px double white";
}

   else if (value === '4' || value ==='four' || value ==='Four') {
document.getElementById("fortune").innerHTML= (inputNameBad + "All things are not going well for you. Whatever you try, something goes wrong. Your day is ruined. Better stay home in peace.").toUpperCase();
four = document.getElementById("fortune").style;
 four.fontSize = 30 + "px";
 four.color="red";
 four.backgroundColor="#b5dcf9";
 four.lineHeight="30px";
 four.border="15px double white";
}

else if (value === '5' || value ==='five' || value ==='Five') {
document.getElementById("fortune").innerHTML= inputName + " will find the things they've lost and remember what they have forgotten.";
five = document.getElementById("fortune").style;
 five.fontSize = 25 + "px";
 five.color="black";
 five.backgroundColor="#a9e5e3";
 five.border="15px double white";
}

else if (value === '6' || value ==='six' || value ==='Six') {
document.getElementById("fortune").innerHTML= inputName + " will experience problems continuously arising but after resolving them, everything will go well again.";
six = document.getElementById("fortune").style;
 six.fontSize = 25 + "px";
 six.color="black";
 six.backgroundColor="#a2edce";
 six.border="15px double white";
}

else if (value === '7' || value ==='seven' || value ==='Seven') {
document.getElementById("fortune").innerHTML= inputName + ", what you desire the most in your heart will come true.";
seven = document.getElementById("fortune").style;
 seven.fontSize = 25 + "px";
 seven.color="black";
 seven.backgroundColor="#a0d995";
 seven.border="15px double white";
}

else if (value === '8' || value ==='eight' || value ==='Eight') {
document.getElementById("fortune").innerHTML= inputName + ", your relationships will improve and your love will bloom.";
eight = document.getElementById("fortune").style;
 eight.fontSize = 25 + "px";
 eight.color="black";
 eight.backgroundColor="#cedf90";
 eight.border="15px double white";
}

else if (value === '9' || value ==='nine' || value ==='Nine') {
document.getElementById("fortune").innerHTML= inputName + ", it's your lucky day. You will encounter great riches!";
nine = document.getElementById("fortune").style;
 nine.fontSize = 25 + "px";
 nine.color="black";
 nine.backgroundColor="#fae187";
 nine.border="15px double white";
}

else if (value === '10' || value ==='ten' || value ==='Ten') {
document.getElementById("fortune").innerHTML= inputName + ", everything may seem unclear at the moment but the fog will clear and you will be able to find your way.";
ten = document.getElementById("fortune").style;
 ten.fontSize = 25 + "px";
 ten.color="black";
 ten.backgroundColor="#e8ba86";
 ten.border="15px double white";
}

else{
     document.getElementById("display").innerHTML = "Not a number between 0 and 10" ;
     not = document.getElementById("display").style;
      not.fontSize = 25 + "px";
      not.color="#960E0E";
}

// https://i6.cims.nyu.edu/~mr6465/web_design/javascript/seasons_js/images/winter-2x.jpg'
// https://i6.cims.nyu.edu/~mr6465/web_design/javascript/seasons_js/images/autumn-2x.jpg
//https://i6.cims.nyu.edu/~mr6465/web_design/javascript/seasons_js/images/summer-2x.jpg
}
