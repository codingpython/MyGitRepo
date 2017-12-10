// List of elements that should call a js function

//$(document).ready(function() {
function wonload_setup_smooth_scrolling() {

	var el = document.getElementById("button_smooth_scroll_test");
	el.addEventListener("click", function(){smoothScroll('id_div_orange_a_top')}, false);
	el.addEventListener("click", function(){a_highlight('id_div_orange_a_top')}, false);
	
}
// --- Input slider change element ---

// EventListener hinzufügen
window.addEventListener("load", function(){

	// Range-Slider in Variable speichern 
	var slider = document.querySelector("input[type='range']");

	// EventListener für das Verändern des Sliders hinzufügen
	slider.addEventListener("mousemove", function(){

	// Testelement verschieben, indem Inline-Styles eingefügt werden
	document.querySelector(".div_slider_slide").style.transform = "translate(" + this.value + "px"+ ",0)";

	// Wert des Range-Sliders anzeigen
	document.querySelector(".range span").innerHTML = this.value;
	
  });
});

// ##### Smooth Scrolling #####
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 10) speed = 10;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
// #####


function reply_click(clicked_id)
{
    alert(clicked_id);
}

// ##### clean implementation of Sleep in js #####
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ##### Highlight function #####
async function a_highlight(a_id) {	
	var x = document.getElementById(a_id); /*.parentElement.nodeName; */
	if (x.style.animation == "") {
		x.style.animation = "highlight_div 1.5s ease-out 0.10s";	
		x.style.webkitAnimation = "highlight_div 1.5s ease-out 0.1s";
		await sleep(1800); /*add a little bit more than duration + delay*/
		x.style.animation = null;	
		x.style.webkitAnimation = null;
	}
};

/*
startbtn.addEventListener("click", function(){
	
});
stopbtn.addEventListener("click", function(){
	ball.style.animation = "";
	ball.style.webkitAnimation = "";
});	
*/
	
var elements = document.getElementsByTagName('abc');
for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function () {
        // stuff
    }
}

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
	  
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
	 
    }
  });
});


function letterToColumn(letter)
{
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++)
  {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
	
	
	console.log(letter.charCodeAt(i) - 64)
	console.log(length - i - 1)
	console.log(column)
  }
  return column;
}

letterToColumn('ABC')

//checkBrowserVersion()

var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        isBlink ? 'Blink' :
        "Don't know";
};

//alert(browser());
//console.log(browser());


function get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }

function checkBrowserVersion() {
	var browser=get_browser();
	name = browser.name;
	version = browser.version;
	var raise_flag = false;
	if ((name == 'Chrome') && (version <= 39)) {
		raise_flag = true;
	}
	else if ((name == 'Firefox') && (version <= 35)) {
		raise_flag = true;
	}
	else if ((name == 'Safari') && (version <= 7)) {
		raise_flag = true;
	}
	else if ((name == 'IE') && (version <= 9)) {
		raise_flag = true;
	}
	if (raise_flag == true) {
		
	}
	return version
} 


//alert(checkBrowserVersion())
