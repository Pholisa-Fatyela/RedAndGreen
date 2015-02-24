var assert = {
	i:0,
	pass:0,

	equals: function(message,result) {
		var newBlock = document.createElement('div');

		newBlock.id = "square"+this.i;
		newBlock.style.height = "150px";
		newBlock.style.width = "150px";
		newBlock.style.border = "5px solid black";
		newBlock.style.display = "inline-Block";

		document.body.appendChild(newBlock);

		var rg = new RedOrGreen(newBlock.id);
		if(message === result) {
			newBlock.innerHTML= "Pass";
			rg.makeGreen();
			this.pass++;

		}
		else{
			newBlock.innerHTML= "Fail";
			rg.makeRed();
		}
		this.i++;
	}
}

var TestMyCode = {
	run: function(name, assertTest){
		this.name = name;
		assertTest(assert);
	}
}


function results() {
	var dee = document.createElement('p');

	document.body.appendChild(dee);
	dee.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
}