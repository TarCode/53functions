
test('hello()', function() {
    equal(hello(), 'hello world');
    
})

test('hello_joe()', function() {
    equal(hello_joe("bob"), 'Hello!');
    equal(hello_joe("jeff"), 'Hello jeff!');	
    
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


test('length()', function() {
    equal(length('red'), 3);
    
})

test('upper()', function() {
    equal(upper('red'), "RED");
    
})

test('reverse()', function() {
    equal(Reverse('red'), "der");
    
})

test('hello_list()', function() {
    var hi = ['hello world', 'hello world', 'hello world'];	
    deepEqual(hello_list(2), hi);
    
})

test('high_low()', function() {
    var numList = [1,2,3,4];	
    var out = "low = 1 , high = 4";

    deepEqual(high_low(numList), out);
    
})

test('count_words()', function() {
    var str = "I contain four words";	

    equal(count_words(str), 4);
    
})

test('sum_word_len()', function() {
    var str = "I contain four words";	

    equal(sum_word_len(str), 17);
    
})

test('longest_word()', function() {
    var str = "I contain six variable sized words";   

    equal(longest_word(str), "variable: 8");
    
})

test('shortest_word()', function() {
    var str = "Six variable sized words I contain";   

    equal(shortest_word(str), "I: 1");
    
})


