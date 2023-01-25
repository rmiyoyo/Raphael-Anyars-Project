// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
"use strict";

function checkScreenWidth() {
  var width = window.innerWidth;
  if (width < 600) {
    // apply styles for screens smaller than 600px
    document.body.style.fontSize = "16px";
  } else {
    // apply styles for larger screens
    document.body.style.fontSize = "18px";
  }
}

// call the function on page load
checkScreenWidth();

// call the function on screen resize
window.onresize = checkScreenWidth;

if (window.matchMedia("(max-width: 600px)").matches) {
  /* the viewport is less than 600 pixels wide */
  document.body.style.fontSize = "16px";
} else {
  /* the viewport is at least 600 pixels wide */
  document.body.style.fontSize = "18px";
}
