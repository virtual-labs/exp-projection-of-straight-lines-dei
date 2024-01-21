
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

function getValue1(option) {

  if (option.value =="penn")
   {
    document.getElementById("png3").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("numoutnext").innerHTML = "";
  }

  else
   {
    document.getElementById("numoutnext").innerHTML="Select 2H pencil";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";
    
  }
}

function getValue2(option) {

  if (option.value =="pen1")
   {
    document.getElementById("png13").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("numoutnext").innerHTML = "";
  }

  else
   {
    document.getElementById("numoutnext").innerHTML="Select 3H pencil";
    document.getElementById("png13").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";
    
  }
}

function getValue3(option) {

  if (option.value =="penn5")
   {
    document.getElementById("png12").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("numoutnext").innerHTML = "";
  }

  else
   {
    document.getElementById("numoutnext").innerHTML="Select 2H pencil";
    document.getElementById("png12").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";
    
  }
}

// first function
function movepen(){
  document.getElementById("png6").style.visibility="visible";
  document.getElementById("png").style.visibility="hidden";
  document.getElementById("png5").style.visibility="hidden";
  document.getElementById("dr").style.visibility="hidden";
  document.getElementById("png4").style.visibility="hidden";
  myTimeout = setTimeout(myGreeting, 9000);

}
// third function
function nextst(){
  document.getElementById("png8").style.visibility="visible";
  document.getElementById("png7").style.visibility="hidden";
  document.getElementById("png5").style.visibility="hidden";
  document.getElementById("dr1").style.visibility="hidden";
  document.getElementById("png3").style.visibility="hidden";
  myTimeout3 = setTimeout(myGreeting2, 15000);

}
// fourth function
function movepen3(){
  document.getElementById("png9").style.visibility="visible";
  document.getElementById("png5").style.visibility="hidden";
  document.getElementById("dr2").style.visibility="hidden";
  document.getElementById("png13").style.visibility="hidden";
  myTimeout4 = setTimeout(myGreeting3, 11000);
}
// fifth function
function nextst3(){
  document.getElementById("png10").style.visibility="visible";
  document.getElementById("png5").style.visibility="hidden";
  document.getElementById("dr3").style.visibility="hidden";
  document.getElementById("png12").style.visibility="hidden";
  document.getElementById("png9").style.visibility="hidden";
  myTimeout5 = setTimeout(myGreeting4, 11000);
}


// Second Function
function nextst1(){
  document.getElementById("png7").style.visibility="visible";
  document.getElementById("png6").style.visibility="hidden";
  document.getElementById("png5").style.visibility="hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout2 = setTimeout(myGreeting1, 4000);

}

// 1 gr
function myGreeting()
     {
    document.getElementById("png5").style.visibility="visible";
    // document.getElementById("dr2").style.visibility="visible";
    document.getElementById("png14").style.visibility="visible";
    document.getElementById("canvas2").style.visibility="visible";
    document.getElementById("canvas1").style.visibility="hidden";
    
    myStopFunction();
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);

  
}
// 2 gr
function myGreeting1()
     {
    document.getElementById("dr1").style.visibility="visible";
    // document.getElementById("png10").style.visibility="visible";
    document.getElementById("canvas3").style.visibility="visible";
    document.getElementById("canvas2").style.visibility="hidden";
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout);

  
}

function myGreeting2()
     {
    document.getElementById("dr2").style.visibility="visible";
    document.getElementById("canvas4").style.visibility="visible";
    document.getElementById("canvas3").style.visibility="hidden";
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout3);

  
}

function myGreeting3()
     {
    document.getElementById("dr3").style.visibility="visible";
    document.getElementById("canvas5").style.visibility="visible";
    document.getElementById("canvas4").style.visibility="hidden";
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout4);

  
}

function myGreeting4()
     {
    document.getElementById("next").style.visibility="visible";
    
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout5);

  
}