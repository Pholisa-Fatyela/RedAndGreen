var assert = {
	equals: function(message,result) {
		var rg = new RedOrGreen("square");
		if(message === result) {
			rg.makeGreen();
		}
		else{
			rg.makeRed();
		}

	}

}

var TestMyCode = {
	run: function(name, assertTest){
		this.name = name;
		assertTest(assert);
	}
}