// loop.js

		// Wait for PhoneGap to load

        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        
        function onDeviceReady() {
            playAudio(src);
   
        }


        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;
        var duration = 0; // 

		
        // Play audio
        //
        function playAudio() {
        if (duration == 3000) { // tambah condition, 3000 tu length audio file
            // Create Media object from src
     
            my_media = new Media("/android_asset/www/sounds/Standard-A.mp3", onSuccess, onError);
			document.getElementById("duration").innerHTML=duration;
            // Play audio
            
        my_media.play();
	
            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
            
           
            setTimeout("playAudio()", duration);
            
        } // curly brace utk if (duration = 3000)...
            
            
        }
 // tambah dua functions kt bawah : main/loop pki startmain, stop pki stopmain     
function startmain() { 
    duration = 3000; playAudio(); 
}      
function stopmain() { 
	duration = 0; 
	if (my_media) {
    my_media.stop();
    my_media = null;
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
} 
//end

        // Pause audio
        // 
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
                my_media = null;
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }