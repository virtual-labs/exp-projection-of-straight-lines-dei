//Your JavaScript goes in here

window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scroll bar
  });
  
  // ----------------------options-------------------------
  
  function drop() {
    const trans1 = document.getElementById("trans1"); // Assuming 'trans1' is an element ID
    const arr1 = document.getElementById("arr1"); // Assuming 'arr1' is an element ID
    const dropMenu1 = document.getElementById("dropMenu1"); // Assuming 'dropMenu1' is an element ID
    const arrow1 = document.getElementById("arrow1");
    trans1.style.visibility = "hidden";
    arr1.style.visibility = "hidden";
    dropMenu1.style.visibility = "visible";
  
    dropMenu1.addEventListener("change", (evt) => {
      let selectedValue = dropMenu1.value;
      if (selectedValue === "3hPencil") {
        dropMenu1.style.visibility = "hidden";
        document.getElementById("whitebox2").style.visibility = "hidden";
        arrow1.style.visibility = "visible";
      } else {
        alert("Please select 3H Pencil");
      }
    });
  }
  
  function drop2() {
    // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
    const trans2 = document.getElementById("trans2");
    const arr1 = document.getElementById("arr1");
    const arr2 = document.getElementById("arr2");
    const dropMenu2 = document.getElementById("dropMenu2");
    const arrow1 = document.getElementById("arrow1");
  
    // Hide 'trans2', 'arr1', and show 'dropMenu2'
    trans2.style.visibility = "hidden";
    arr1.style.visibility = "hidden";
    dropMenu2.style.visibility = "visible";
  
    // Add a change event listener to 'dropMenu2'
    dropMenu2.addEventListener("change", (evt) => {
      let selectedValue = dropMenu2.value; // Corrected variable name to 'dropMenu2'
  
      if (selectedValue === "hPencil") {
        // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
        dropMenu2.style.visibility = "hidden";
        document.getElementById("whitebox3").style.visibility = "hidden";
        arr2.style.visibility = "visible";
      } else {
        // If a different value is selected, show an alert
        alert("Please select H Pencil");
      }
    });
  }
  
  function drop3() {
    // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
    const trans3 = document.getElementById("trans3");
    const arr3 = document.getElementById("arr3");
    const dropMenu3 = document.getElementById("dropMenu3");
    const arrow12 = document.getElementById("arrow12");
  
    // Hide 'trans2', 'arr1', and show 'dropMenu2'
    trans3.style.visibility = "hidden";
    arr3.style.visibility = "hidden";
    dropMenu3.style.visibility = "visible";
  
    // Add a change event listener to 'dropMenu2'
    dropMenu3.addEventListener("change", (evt) => {
      let selectedValue = dropMenu3.value; // Corrected variable name to 'dropMenu2'
  
      if (selectedValue === "3hPencil") {
        // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
        dropMenu3.style.visibility = "hidden";
        document.getElementById("whitebox4").style.visibility = "hidden";
        arrow12.style.visibility = "visible";
      } else {
        // If a different value is selected, show an alert
        alert("Please select 3H Pencil");
      }
    });
  }
  function drop4() {
    // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
    const trans3 = document.getElementById("trans3");
    const arr3 = document.getElementById("arr3");
    const dropMenu3 = document.getElementById("dropMenu3");
    const arrow12 = document.getElementById("arrow19");
  
    // Hide 'trans2', 'arr1', and show 'dropMenu2'
    trans3.style.visibility = "hidden";
    arr3.style.visibility = "hidden";
    dropMenu3.style.visibility = "visible";
  
    // Add a change event listener to 'dropMenu2'
    dropMenu3.addEventListener("change", (evt) => {
      let selectedValue = dropMenu3.value; // Corrected variable name to 'dropMenu2'
  
      if (selectedValue === "3hPencil") {
        // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
        dropMenu3.style.visibility = "hidden";
        document.getElementById("whitebox5").style.visibility = "hidden";
        arrow19.style.visibility = "visible";
      } else {
        // If a different value is selected, show an alert
        alert("Please select 3H Pencil");
      }
    });
  }
  
  function gif1() {
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("whitebox4").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("gif1").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox16").style.visibility = "hidden";
      document.getElementById("arrow").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 12000);
  }
  
   
  function gif21() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("gif21").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox21").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
    }, 25000);
  }
  function gif21a() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("gif21").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox21").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
    }, 7000);
  }
  function gif21b() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("gif21").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox21").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
    }, 15000);
  }
  
  
  function gif71() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 14050);
  }
  
  function gif71a() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 10050);
  }
  
  function gif71h() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 9350);
  }
  
  
  function gif71i() {
    document.getElementById("arrow13").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 2000);
  }
  
  
  function gif71b() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 7050);
  }
  
  function gif71c() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 4050);
  }
  
  
  function gif71d() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 12050);
  }
  
  function gif71e() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 9500);
  }
  
  function gif71f() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 17000);
  }
  
  
  function gif71g() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 12000);
  }
  
  function gif113() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("seventyeight").style.visibility = "hidden";
    document.getElementById("gif71").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif71").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventynine").style.visibility = "visible";
    }, 9000);
  }
  
 