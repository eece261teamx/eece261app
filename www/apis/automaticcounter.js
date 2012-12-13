// automatic counter

// Here set the minutes, seconds, and tenths-of-second when you want the chronometer to stop
// If all these values are set to 0, the chronometer not stop automatically
var sthrs = 0;
var stmints = 0;
var stseconds = 0;
var stzecsec = 0;


// function to be executed when the chronometer stops
function alertDismissed() {
    // do something
}

function toAutoStop() {
	navigator.notification.alert('Alert!',  // message
    alertDismissed,         // callback
    'Chronometer',            // title
    'Ok'                  // buttonName
	);
}

//if a key name "enable" is 1, then update the local storage for "hour, minute, and second" 
//by using automatic counter. if not, have to execute the automatic counter function 
//if a key name enable does not exist, create it, set it to 0
//also, create three keys namely hour, minute, second, and set them to 0 
var startchron;

function readenable() {
    var checkenable = window.localStorage.getItem("enable");
    var checkok = window.localStorage.getItem("ok");
    checkenable = checkenable*1;
    checkok = checkok*1;
    if (!checkok) {
    	window.localStorage.setItem("stophour", 0);
    	window.localStorage.setItem("stopminute", 0);
    	window.localStorage.setItem("stopsecond", 0);
    	window.localStorage.setItem("ok", 1);
    }
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
	    zecsec = window.localStorage.getItem("zecsec");
	    zecsec = zecsec*1;
	    seconds = window.localStorage.getItem("seconds");
	    seconds = seconds*1;
	    mints = window.localStorage.getItem("mints");
	    mints = mints*1;
	    hrs = window.localStorage.getItem("hrs");
	    hrs = hrs*1;
	    sthrs = zecsec = window.localStorage.getItem("stophour");
        sthrs = sthrs*1;
        stmints = zecsec = window.localStorage.getItem("stopminute");
		stmints = stmints*1;
		stseconds = window.localStorage.getItem("stopsecond");
		stseconds = stseconds*1;
		chronometer();
    }
}



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
    if(zecsec == stzecsec && seconds == stseconds && mints == stmints && hrs == sthrs) toAutoStop();
    else setTimeout("chronometer()", 100);
  }
}




