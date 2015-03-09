function Reverse(word){
	var newString = "";
	var x = word.length;
	while(x > 0){
		newString += word.substring(x-1, x);
		x--;
	}
	return newString;
}
