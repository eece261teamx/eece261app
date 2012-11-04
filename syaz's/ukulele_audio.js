
var audios = new Array();
i=0;
AddNote("Ukulele_Standard_G");
AddNote("Ukulele_Standard_C");
AddNote("Ukulele_Standard_E");
AddNote("Ukulele_Standard_A");


function AddNote(name) {
    var audioElement = document.createElement('audio');
	audioElement.setAttribute("preload", "auto");
	audioElement.autobuffer = true;

	var source1 = document.createElement('source');
	source1.type= 'audio/mpeg';
	source1.src= 'tunes/'+name+'.mp3';
	audioElement.appendChild(source1);
	audios[i] = audioElement;
	audios[i].load();
	i++	
}


$("#Ukulele_Standard_G").click(function(){
	audios[0].play();
});

$("#Ukulele_Standard_C").click(function(){
	audios[1].play();
});

$("#Ukulele_Standard_E").click(function(){
	audios[2].play();
});

$("#Ukulele_Standard_A").click(function(){
	audios[3].play();
});

$("#stop").click(function(){
    stopAllActivity()
});

$("#toggle").change(function() {
	loop()
});

function stopAllActivity()
{
	for (i = 0; i < audios.length; i++){
        audios[i].pause();
        audios[i].load();
    }
}
function loop()
{
	if($("#toggle").val().toString()=="on")
	{	
		enableLoop() 
	}
	else
	{
		disableLoop()
	};
}		

function enableLoop() {
	for (var i = 0; i < audios.length; i++){
        audios[i].loop = true;
        audios[i].load();
    }
}

function disableLoop() {
	for (var i = 0; i < audios.length; i++){
        audios[i].loop = false;
        audios[i].load();
    }
}
