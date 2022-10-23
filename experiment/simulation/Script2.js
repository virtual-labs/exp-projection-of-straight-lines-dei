
let greeting;
function getValue(option) {

  if (option.value =="pen")
   {
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
  myTimeout = setTimeout(myGreeting, 9000);

}

function nextst(){
  document.getElementById("png8").style.visibility="visible";
  document.getElementById("png6").style.visibility="hidden";
  document.getElementById("png5").style.visibility="hidden";
  document.getElementById("png7").style.visibility="hidden";
  myTimeout1 = setTimeout(myGreeting1, 9000);

}

function nextst1(){
  document.getElementById("png9").style.visibility="visible";
  document.getElementById("png10").style.visibility="hidden";
  document.getElementById("png5").style.visibility="hidden";
  // document.getElementById("png7").style.visibility="hidden";
  myTimeout2 = setTimeout(myGreeting2, 15000);

}


function myGreeting()
     {
    document.getElementById("png5").style.visibility="visible";
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}

function myGreeting1()
     {
    document.getElementById("png5").style.visibility="visible";
    document.getElementById("png10").style.visibility="visible";
    document.getElementById("png7").style.visibility="hidden";
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout);

  
}

function myGreeting2()
     {
    document.getElementById("next").style.visibility="visible";
    
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout);

  
}