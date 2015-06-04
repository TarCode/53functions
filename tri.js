function tri(){
	var tri = "";
	for (var i=0; i<=4; i++){
	  for (var j=0; j<i; j++){
	  	tri += "*";
	  }
	  tri += "\n";
	}	
	return tri;
}