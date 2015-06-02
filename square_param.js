function square_param(cha, siz){
	var star = "";
	for(var x =0; x < siz; x++){
		star += "\n"+cha;
		for(var y = 0; y < (siz-1); y++){
			star += cha;
		}
	}
	return star;
}