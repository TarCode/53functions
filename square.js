function square(cha){
	var star = "";
	for(var x =0; x < 4; x++){
		star += "\n"+cha;
		for(var y = 0; y < 3; y++){
			star += cha;
		}
	}
	return star;
}