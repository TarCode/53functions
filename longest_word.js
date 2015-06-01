function longest_word(str) {
		var word = "";
    	var splitStr = str.split(" ");
    	for(var x = 0; x < splitStr.length; x++){
    		if(splitStr[x] !== null){
	    		if(word.length < splitStr[x+=1].length){
	    			word = splitStr[x];
	    		}
	    	}
    	}
    return word +": "+ word.length;
}
