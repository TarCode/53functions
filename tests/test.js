
test('hello()', function() {
    equal(hello(), 'hello world');
    
})

test('hello_joe()', function() {
    equal(hello_joe("bob"), 'Hello!');
    equal(hello_joe("jeff"), 'Hello !');	
    
})

test('hello_uppercase()', function() {
    equal(hello_uppercase("sir"), 'hello sir');
    equal(hello_uppercase("bob"), 'hello bob');	
    
})

test('number_list()', function() {
    deepEqual(number_list(3), [1,2]);
    deepEqual(number_list(2), [1]);	
    
})

test('sum_numbers()', function() {
    equal(sum_numbers(3), 3);
    equal(sum_numbers(2), 1);	
    
})
