// Progress Tracker Using Modified Local Storage
// api-storage   Local Storage
function writeLocalStorage() {
    var w = document.getElementById("hourstoday").value;
    var check = window.localStorage.getItem("myKey");
    w = w*1;
    check = check*1;
    // if check is more than 0, add w to check
    if (check > 0)
    {
    w = w + check;
    }
    
	window.localStorage.setItem("myKey", w);
    readLocalStorage(); //view input
}

function readLocalStorage() {
    var hour = window.localStorage.getItem("myKey");
    if (!hour) {
        $('#local-storage-result').html("# of hours: <strong>0</strong>"); 
        window.localStorage.setItem("myKey", 0);       
    } else {
        $('#local-storage-result').html("# of hours: <strong>" + hour + "</strong>");
    }
}

function removeItemLocalStorage() {
    window.localStorage.setItem("myKey", 0);
    $('#local-storage-result').html("Progress Cleared!");    
}

	