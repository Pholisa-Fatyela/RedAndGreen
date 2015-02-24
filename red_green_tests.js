var rg = new RedOrGreen("square");

   rg.makeGreen();
   // myElements backgound color should be green now
   if(document.getElementById("square").style.backgroundColor === "green"){
			window.alert("square is green");
		}
		else{
			window.alert("failure, your square didnt change color");
		}

   rg.makeRed();
   // myElements backgound should be red now
      if(document.getElementById("square").style.backgroundColor === "red"){
			window.alert("square is red");
		}
		else{
			window.alert("failure, your square didnt change color");
		}