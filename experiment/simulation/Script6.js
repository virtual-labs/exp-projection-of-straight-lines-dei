let greeting;
function getValue(option) {

  if (option.value == "pen") {
    document.getElementById("png4").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("numoutnext").innerHTML = "";
  }

  else {
    document.getElementById("numoutnext").innerHTML = "Select 3H pencil";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";

  }
}

function getValue1(option) {

  if (option.value == "penn") {
    document.getElementById("png3").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("numoutnext").innerHTML = "";
  }

  else {
    document.getElementById("numoutnext").innerHTML = "Select 2H pencil";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";

  }
}
/*
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
*/
// first function
function movepen() {
  document.getElementById("png6").style.visibility = "visible";
  document.getElementById("png").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("dr").style.visibility = "hidden";
  document.getElementById("png4").style.visibility = "hidden";
  myTimeout = setTimeout(myGreeting, 9000);

}
function movepen2() {
  document.getElementById("png16").style.visibility = "visible";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("dr1").style.visibility = "hidden";
  document.getElementById("png3").style.visibility = "hidden";
  myTimeout11 = setTimeout(myGreeting11, 8000);

}
// third function
function nextst() {
  document.getElementById("png8").style.visibility = "visible";
  //document.getElementById("png8").style.visibility="hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png7").style.visibility = "hidden";
  document.getElementById("png19").style.visibility = "hidden";
  //   document.getElementById("png3").style.visibility="hidden";
  myTimeout3 = setTimeout(myGreeting2, 15000);

}
// fourth function
/*function movepen3(){
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
}*/


// Second Function
function nextst1() {
  document.getElementById("png7").style.visibility = "visible";
  document.getElementById("png6").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png18").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout2 = setTimeout(myGreeting1, 15000);

}
// new step made
function nextst2() {
  document.getElementById("png9").style.visibility = "visible";
  document.getElementById("png8").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png20").style.visibility = "hidden";
  mytimeoutnew = setTimeout(mygret, 10000);


}
function nextst3() {
  document.getElementById("png10").style.visibility = "visible";
  document.getElementById("png9").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png21").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout6 = setTimeout(myGreeting5, 9000);

}

function nextst4() {
  document.getElementById("png11").style.visibility = "visible";
  document.getElementById("png10").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png22").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout7 = setTimeout(myGreeting6, 9000);

}

function nextst5() {
  document.getElementById("png12").style.visibility = "visible";
  document.getElementById("png11").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png23").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout8 = setTimeout(myGreeting7, 9000);

}

function nextstn5() {
  document.getElementById("png5").style.visibility="visible";
  document.getElementById("pngnew5").style.visibility = "hidden";

}

function nextst6() {
  document.getElementById("png13").style.visibility = "visible";
  document.getElementById("png12").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png24").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout9 = setTimeout(myGreeting8, 6000);

}
function nextst7() {
  document.getElementById("png14").style.visibility = "visible";
  document.getElementById("png13").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png25").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout10 = setTimeout(myGreeting9, 6000);

}

function nextst8() {
  document.getElementById("png15").style.visibility = "visible";
  document.getElementById("png14").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png26").style.visibility = "hidden";
  // document.getElementById("dr1").style.visibility="visible";
  myTimeout11 = setTimeout(myGreeting10, 15000);

}
/*
function nextst9() {
  document.getElementById("png16").style.visibility = "visible";
  document.getElementById("png15").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png27").style.visibility = "hidden";
  document.getElementById("dr1").style.visibility="hidden";
  myTimeout12 = setTimeout(myGreeting11, 10000);

}*/

function nextst10() {
  document.getElementById("png17").style.visibility = "visible";
  document.getElementById("png16").style.visibility = "hidden";
  document.getElementById("png5").style.visibility = "hidden";
  document.getElementById("png28").style.visibility = "hidden";
  document.getElementById("dr1").style.visibility="hidden";
  myTimeout13 = setTimeout(myGreeting12, 10000);

}

function myGreeting5() {
  //document.getElementById("dr2").style.visibility="visible";
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png22").style.visibility = "visible";
  document.getElementById("canvas6").style.visibility = "visible";
  document.getElementById("canvas5").style.visibility = "hidden";
  myStopFunction1();
}

function myStopFunction1() {
  clearTimeout(myTimeout6);


}

// 1 gr
function myGreeting() {
  document.getElementById("png5").style.visibility = "visible";
  // document.getElementById("dr2").style.visibility="visible";
  document.getElementById("png18").style.visibility = "visible";
  document.getElementById("canvas2").style.visibility = "visible";
  document.getElementById("canvas1").style.visibility = "hidden";

  myStopFunction();
}

function myStopFunction() {
  clearTimeout(myTimeout);


}
// 2 gr
function myGreeting1() {
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png19").style.visibility = "visible";
  // document.getElementById("png10").style.visibility="visible";
  document.getElementById("canvas3").style.visibility = "visible";
  document.getElementById("canvas2").style.visibility = "hidden";
  myStopFunction1();
}

function myStopFunction1() {
  clearTimeout(myTimeout);


}

function myGreeting2() {
  //document.getElementById("dr2").style.visibility="visible";
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png20").style.visibility = "visible";
  document.getElementById("canvas4").style.visibility = "visible";
  document.getElementById("canvas3").style.visibility = "hidden";
  myStopFunction1();
}

function myStopFunction1() {
  clearTimeout(myTimeout3);


}
/*
function myGreeting3()
     {
    //document.getElementById("dr3").style.visibility="visible";
    document.getElementById("canvas5").style.visibility="visible";
    document.getElementById("canvas4").style.visibility="hidden";
    myStopFunction1();
  }
  
  function myStopFunction1() {
    clearTimeout(myTimeout4);

  
}
*/
function myGreeting4() {
  document.getElementById("next").style.visibility = "visible";

  myStopFunction1();
}

function myStopFunction1() {
  clearTimeout(myTimeout5);


}

function mygret() {
  debugger;
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png21").style.visibility = "visible";
  document.getElementById("canvas5").style.visibility = "visible";
  document.getElementById("canvas4").style.visibility = "hidden";
  myStopFunction1();
}

function myStopFunction1() {
  clearTimeout(mytimeoutnew);
}

function myGreeting6() {
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png23").style.visibility = "visible";
  document.getElementById("canvas7").style.visibility = "visible";
  document.getElementById("canvas6").style.visibility = "hidden";
  myStopFunction6();

}
function myStopFunction6() {
  clearTimeout(myTimeout6);


}
function myGreeting7() {
  document.getElementById("pngnew5").style.visibility = "visible";
  document.getElementById("png24").style.visibility = "visible";
  document.getElementById("canvas8").style.visibility = "visible";
  document.getElementById("canvas7").style.visibility = "hidden";
  myStopFunction7();

}
function myStopFunction7() {
  clearTimeout(myTimeout7);


}

function myGreeting8() {
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png25").style.visibility = "visible";
  document.getElementById("canvas9").style.visibility = "visible";
  document.getElementById("canvas8").style.visibility = "hidden";
  myStopFunction8();

}
function myStopFunction8() {
  clearTimeout(myTimeout8);


}

function myGreeting9() {
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png26").style.visibility = "visible";
  document.getElementById("canvas10").style.visibility = "visible";
  document.getElementById("canvas9").style.visibility = "hidden";
  myStopFunction9();

}
function myStopFunction9() {
  clearTimeout(myTimeout9);


}

function myGreeting10() {
  //document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png27").style.visibility = "visible";
  document.getElementById("canvas11").style.visibility = "visible";
  document.getElementById("canvas10").style.visibility = "hidden";
  document.getElementById("dr1").style.visibility = "visible";
  myStopFunction10();

}
function myStopFunction10() {
  clearTimeout(myTimeout10);


}
function myGreeting11() {
  document.getElementById("png5").style.visibility = "visible";
  document.getElementById("png28").style.visibility = "visible";
  document.getElementById("canvas12").style.visibility = "visible";
  document.getElementById("canvas11").style.visibility = "hidden";
  //document.getElementById("dr1").style.visibility = "visible";
  myStopFunction11();

}
function myStopFunction11() {
  clearTimeout(myTimeout11);


}

function myGreeting12() {
  // document.getElementById("png5").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
  document.getElementById("canvas12").style.visibility = "visible";
  document.getElementById("canvas11").style.visibility = "hidden";
  //document.getElementById("dr1").style.visibility = "visible";
  myStopFunction12();

}
function myStopFunction12() {
  clearTimeout(myTimeout12);


}

