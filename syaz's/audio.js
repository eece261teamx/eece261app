
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