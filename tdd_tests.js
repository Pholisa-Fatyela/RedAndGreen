TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result, "testing the helloWorld function ");
});

TestMyCode.run("testing bark function", function(assert){
    var result = bark();
    // is the result as we expected?
    assert.equals("hello world!", result,"testing the bark function ");
});

TestMyCode.run("testing blah function", function(assert){
    var result = blah();
    // is the result as we expected?
    assert.equals("blah blah blah blah!", result, "testing the blah function ");
});

TestMyCode.run("testing mama function", function(assert){
    var result = mama();
    // is the result as we expected?
    assert.equals("blah blah blah blah!", result, "testing the mama function");
});

results();