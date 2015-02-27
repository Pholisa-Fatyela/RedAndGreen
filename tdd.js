var assert = {
	i:0,
	pass:0,

	equals: function(message,result,newmsg) {
		//creating a new element
		var newBlock = document.createElement('div');

		//Giving the newly created div style
		newBlock.id = "square"+this.i;
		newBlock.style.height = "150px";
		newBlock.style.width = "150px";
		newBlock.style.border = "solid black 1px";
		newBlock.style.display = "inline-Block";

		//Appending the new div you have created to the body
		document.body.appendChild(newBlock);

		//Checking if the square is green or red
		var rg = new RedOrGreen(newBlock.id);
		if(message === result) {
			newBlock.innerHTML= newmsg;
			rg.makeGreen();
			//incrementing pass for the results so we can see how many tests have passed
			this.pass++;

		}
		else{
			newBlock.innerHTML= newmsg;
			rg.makeRed();
		}
		this.i++;
	}
}
//
var TestMyCode = {
	run: function(name, assertTest){
		this.name = name;
		assertTest(assert);
	}
}

//new function for storing the results
function results() {
	//creating a new p element
	var dee = document.createElement('p');
	//Appending the p element to the body of the code
	document.body.appendChild(dee);
	//setting the innerHtml for dee to the specified text
	dee.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
}