function square_stars(){
	var star = "";
	for(var x =0; x < 4; x++){
		star += "\n*";
		for(var y = 0; y < 3; y++){
			star += "*";
		}
	}
	return star;
}