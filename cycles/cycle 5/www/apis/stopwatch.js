
// chronometer / stopwatch JS script - coursesweb.net

// Here set the minutes, seconds, and tenths-of-second when you want the chronometer to stop
// If all these values are set to 0, the chronometer not stop automatically
var sthrs = 0;
var stmints = 0;
var stseconds = 0;
var stzecsec = 0;


// function to be executed when the chronometer stops
function toAutoStop() {
  alert('Your life goes on');
}

// the initial tenths-of-second, seconds, and minutes
var zecsec = 0;
var seconds = 0;
var mints = 0;
var hrs = 0;
var hourformat = 0;

var startchron = 0;

function chronometer() {
  if(startchron == 1) {
    zecsec += 1;       // set tenths of a second

    // set seconds
    if(zecsec > 9) {
      zecsec = 0;
      seconds += 1;
    }

    // set minutes
    if(seconds > 59) {
      seconds = 0;
      mints += 1;
    }
    
    // set hours
    if(mints > 59) {
      mints = 0;
      hrs += 1;
    }
    var hourformat = hrs +(mints/60) + (seconds/3600);
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
    document.getElementById("recordbutton").disabled = false;
    document.getElementById("reset").disabled = false;
	startchron = 1; chronometer(); 
}      // starts the chronometer
function stopChr() { 
	startchron = 0; 
	document.getElementById("start").disabled = false;
}                      // stops the chronometer
function resetChr() {
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
}

