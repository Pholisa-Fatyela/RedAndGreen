TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result);
});

TestMyCode.run("testing bark function", function(assert){
    var result = bark();
    // is the result as we expected?
    assert.equals("hello world!", result);
});

TestMyCode.run("testing blah function", function(assert){
    var result = blah();
    // is the result as we expected?
    assert.equals("blah blah blah blah!", result);
});