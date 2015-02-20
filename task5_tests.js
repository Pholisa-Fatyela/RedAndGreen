(function() {
setBackgroundColor("mySquare",'violet');
	    
		if(document.getElementById("mySquare").style.backgroundColor === "red"){
			window.alert("success!");
		}
		else{
			window.alert("failure");
		}
}) ();