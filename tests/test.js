
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

test('word_length()', function() {
    var str = "Six variable sized words I contain";   

    equal(word_length(str), "5 or 4.83");
    
})

test('avg()', function() {
    var str = "Six variable sized words I contain";   

    equal(avg(str), "5");
    
})

test('start()', function() {
    var str = "Lots of super variable sized words I contain";   

    equal(start(str), "S");
    
})

test('ends()', function() {
    var str = "Lots of super variable sized words I contain";
    var str2 = "Lot of super variabled sized word I contained";   

    equal(ends(str), "S");
    equal(ends(str2), "D");
    
})

test('occurs_most()', function() {
    var str = "Lots of super variable sized words I contain";
    var str2 = "Lump of super clumpy sized buns for funs";   

    equal(occurs_most(str), "O");
    equal(occurs_most(str2), "U");
    
})

test('occurs_least()', function() {
    var str = "silly billy bib";
    var str2 = "dippy dilly bob";

    equal(occurs_least(str), "S");
    equal(occurs_least(str2), "O");
    
    
})

test('uppercase_letters()', function() {
    var str = "Silly Billy Bib";
    var hi = ['S', 'B', 'B']; 

    deepEqual(uppercase_letters(str), hi);
    
})