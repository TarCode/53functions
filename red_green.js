 function RedOrGreen(id){
	
	 this.makeRed = function(){
		document.getElementById(id).style.backgroundColor = 'red';
	};

	this.makeGreen = function(){
		document.getElementById(id).style.backgroundColor = 'green';
	};


}