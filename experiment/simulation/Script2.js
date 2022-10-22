
let greeting;
function getValue(option) {

  if (option.value =="pen")
   {debugger;
    document.getElementById("png4").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("numoutnext").innerHTML = "";
  }

  else
   {
    document.getElementById("numoutnext").innerHTML="Select 3H pencil";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";
    
  }
}

function movepen(){
  document.getElementById("png6").style.visibility="visible";
  document.getElementById("png").style.visibility="hidden";
  document.getElementById("png5").style.visibility="hidden";
  document.getElementById("png4").style.visibility="hidden";

}