    var storage = window.localStorage;
    
    function clearideas() {  
    	if (storage.length > 1)  {
        for(var i = 0; i < storage.length; i++)
        { 
        	var key = storage.key(i);
        	if (key != "myKey")
        	{
        	storage.removeItem(key);
        	}
      	}
      	$('li').remove();
        displayclearall();
        clearideas();
        }
    }
       
    function remove_item(key){
      storage.removeItem(key);
      $('#'+key).remove();
      displayclearall();
    }
    
    function add_item() {   
      console.log('Entering add_item');
      var d = new Date();
      var key = d.getTime();
      var value = $('#new_item').val();
      storage.setItem(key,value);
      createToDoListItem(key,value);
      $("#new_item").val('');
      console.log('Exiting add_item');
      document.getElementById("clearall").style.display="block";
    }
    
    function displayclearall() { 
    initTodoList();
    if (storage.length == 1) // no note exists
    {
    	document.getElementById("clearall").style.display="none";
    }
    }
    
    function initTodoList(){
      console.log("Entering initTodoList " + storage.length);
      for(var i = 0; i < storage.length; i++){ 
        var key = storage.key(i);
        var value = storage.getItem(key);
        if (key != "myKey")
        {
        	createToDoListItem(key,value);
        }
        
      }
    }  
    function createToDoListItem(key, value){
      var html = '<li  data-key="'+key+'" id="'+key+'">'
      +value+' <button onclick="javascript:remove_item(\''+ key+ '\')" > delete </button></li>';
      console.log('Appending html ' + html)
      $("#todo_list").append(html);
    }
