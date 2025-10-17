


function active1(mm,id){

    document.getElementById("menu11").style.display="none"
    document.getElementById("menu22").style.display="none"
    document.getElementById("menu33").style.display="none"
    document.getElementById("menu44").style.display="none"
    document.getElementById("menu55").style.display="none"
    document.getElementById("menu66").style.display="none"
    document.getElementById("menu77").style.display="none"
    document.getElementById("menu88").style.display="none"
    mm.style.display="block"
    document.getElementById("menu1").style.opacity="0.5"
    document.getElementById("menu2").style.opacity="0.5"
    document.getElementById("menu3").style.opacity="0.5"
    document.getElementById("menu4").style.opacity="0.5"
    document.getElementById("menu5").style.opacity="0.5"
    document.getElementById("menu6").style.opacity="0.5"
    document.getElementById("menu7").style.opacity="0.5"
    document.getElementById("menu8").style.opacity="0.5"
    id.style.opacity="1"

}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}