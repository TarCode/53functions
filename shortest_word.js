function shortest_word(str) {
		
    	var splitStr = str.split(" ");
    	var word = splitStr[0];
    	for(var x = 0; x < splitStr.length; x++){
    		if(splitStr[x] !== null){
	    		if(word.length > splitStr[x].length){
	    			word = splitStr[x];
	    		}
	    	}
    	}
    return word +": "+ word.length;
}
