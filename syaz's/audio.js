
var audios = new Array();
i=0;
AddNote("Standard-E");
AddNote("Standard-A");
AddNote("Standard-D");
AddNote("Standard-G");
AddNote("Standard-B");
AddNote("Standard-highE");
AddNote("DropD-D");

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


$("#Standard_E").click(function(){
	audios[0].play();
});

$("#Standard_A").click(function(){
	audios[1].play();
});

$("#Standard_D").click(function(){
	audios[2].play();
});

$("#Standard_G").click(function(){
	audios[3].play();
});

$("#Standard_B").click(function(){
	audios[4].play();
});

$("#Standard_highE").click(function(){
	audios[5].play();
});

$("#Drop_D_D").click(function(){
	audios[6].play();
});

$("#stop").click(function(){
    stopAllActivity()
});

$('select').slider.change(function() {
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
		alert("toggle switch is on");
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
