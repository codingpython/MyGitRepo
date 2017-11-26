//implement/declare/import this .js file at the end of all other files (last one)


function addOnLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

//Declare your functions to load (usually wrappers for functions located in different scripts.js)
addOnLoadEvent(wonload_setup_smooth_scrolling);



//addOnLoadEvent(function() {
  /* anonymous/lamda function*/
  /* alert("test"); */
//});
