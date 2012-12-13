// function to be executed when the chronometer stop

function alertDismissed() {
    // do something
}

function toAutoStop() {
	document.getElementById("start").disabled = false;
	navigator.notification.alert('Alert!',  // message
    alertDismissed,         // callback
    'Chronometer',            // title
    'Ok'                  // buttonName
	);
}

// chronometer / stopwatch 

// Here set the minutes, seconds, and tenths-of-second when you want the chronometer to stop
// If all these values are set to 0, the chronometer not stop automatically
var sthrs = 0;
var stmints = 0;
var stseconds = 0;
var stzecsec = 0;

var zecsec = 0;
var seconds = 0;
var mints = 0;
var hrs = 0;

function savestopafter() {
	sthrs = document.getElementById("stophour").value;
	stmints = document.getElementById("stopminute").value;
	stseconds = document.getElementById("stopsecond").value;
	window.localStorage.setItem("stophour", sthrs);
    window.localStorage.setItem("stopminute", stmints);
    window.localStorage.setItem("stopsecond", stseconds);
    window.localStorage.setItem("ok", 1);
	document.getElementById('stopafter').innerHTML = 'You will be alerted after ' + sthrs+ ' hour(s), ' +stmints+ ' minute(s), and '+ stseconds + ' second(s)';	
}


var hourformat = 0;

var startchron = 0;

function chronometer() {
  if(startchron == 1) {
  
    zecsec += 1;       // set tenths of a second
	window.localStorage.setItem("zecsec", zecsec);
    // set seconds
    if(zecsec > 9) {
      zecsec = 0;
      seconds += 1;
      window.localStorage.setItem("seconds", seconds);
    }

    // set minutes
    if(seconds > 59) {
      seconds = 0;
      mints += 1;
      window.localStorage.setItem("mints", mints);
    }
    
    // set hours
    if(mints > 59) {
      mints = 0;
      hrs += 1;
      window.localStorage.setItem("hrs", hrs);
    }
    hourformat = hrs +(mints/60) + (seconds/3600);
    hourformat = Math.round(hourformat*100)/100;
    // adds data in #showtm
    document.getElementById("record").style.display="none";
    document.getElementById('showtm').innerHTML = hrs+ ' : ' +mints+ ' : '+ seconds;
    document.getElementById('hourstoday').innerHTML= hourformat;
    // if the chronometer reaches to the values for stop, calls whenChrStop(), else, auto-calls chronometer()
    if(zecsec == stzecsec && seconds == stseconds && mints == stmints && hrs == sthrs) toAutoStop();
    else setTimeout("chronometer()", 100);
  }
}

function push() { 
    hourformat = hourstoday.innerHTML;
    hourformat = hourformat*1;
	var check = window.localStorage.getItem("myKey");
    check = check*1;
    // if check is more than 0, add w to check
    if (check > 0)
    {
    hourformat = hourformat + check;
    }
    hourformat = Math.round(hourformat*100)/100;
	window.localStorage.setItem("myKey", hourformat); 
	document.getElementById('hourstoday').innerHTML= 0;   
}    

function startChr() { 
	window.localStorage.setItem("enable", 1);
    document.getElementById("recordbutton").disabled = false;
    document.getElementById("reset").disabled = false;
	startchron = 1; chronometer(); 
}      // starts the chronometer
function stopChr() { 
	startchron = 0; 
	document.getElementById("start").disabled = false;
	window.localStorage.setItem("enable", 2);
}                      // stops the chronometer
function resetChr() {
  window.localStorage.setItem("enable", 0);
  window.localStorage.setItem("zecsec", 0);
  window.localStorage.setItem("seconds", 0);
  window.localStorage.setItem("mints", 0);
  window.localStorage.setItem("hrs", 0);
  document.getElementById("record").style.display="block";
  zecsec = 0;  seconds = 0; mints = 0; startchron = 0; hrs = 0; 
  document.getElementById('showtm').innerHTML = hrs + ' : ' + mints+ ' : '+ seconds;
  document.getElementById("start").disabled = false;
}


function readLocalStorage2() {
	document.getElementById("record").style.display="none";
    var hour = window.localStorage.getItem("myKey");
    if (!hour) {
        window.localStorage.setItem("myKey", 0);   
    }  
    // the initial tenths-of-second, seconds, and minutes, values taken from local storage
	zecsec = window.localStorage.getItem("zecsec");
	zecsec = zecsec*1;
	seconds = window.localStorage.getItem("seconds");
	seconds = seconds*1;
	mints = window.localStorage.getItem("mints");
	mints = mints*1;
	hrs = window.localStorage.getItem("hrs");
	hrs = hrs*1;
	hourformat = hrs +(mints/60) + (seconds/3600);
    hourformat = Math.round(hourformat*100)/100;
    // adds data in #showtm
    document.getElementById("record").style.display="none";
    document.getElementById('showtm').innerHTML = hrs+ ' : ' +mints+ ' : '+ seconds;
    document.getElementById('hourstoday').innerHTML= hourformat;
    // adds data in #stopafter
	    sthrs = window.localStorage.getItem("stophour");
        sthrs = sthrs*1;
        stmints= window.localStorage.getItem("stopminute");
		stmints = stmints*1;
		stseconds = window.localStorage.getItem("stopsecond");
		stseconds = stseconds*1;
	document.getElementById('stopafter').innerHTML = 'You will be alerted after ' + sthrs+ ' hour(s), ' +stmints+ ' minute(s), and '+ stseconds + ' second(s)';		
	var checkenable = window.localStorage.getItem("enable");
	checkenable = checkenable*1;
    if (!checkenable) { 
        window.localStorage.setItem("enable", 0);
        window.localStorage.setItem("zecsec", 0);
        window.localStorage.setItem("seconds", 0);
        window.localStorage.setItem("mints", 0);
        window.localStorage.setItem("hrs", 0);
        startchron = 0;       
    } 
    if (checkenable == 1) {
        startchron = 1;  
        var checkchrono = window.localStorage.getItem("chrono");
        checkchrono = checkchrono*1;
        if (!checkchrono)
        {
        chronometer();       
        }
    }
}

