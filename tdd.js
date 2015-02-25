

var assert = {

			count : 0,
			pass : 0,
			equals : function(exRes, result, funcName){

				
	 			var nuBlock = document.createElement('div');
				nuBlock.id = 'square'+this.count;
				nuBlock.style.height = '150px';
				nuBlock.style.width = '150px';
				nuBlock.style.display = 'inline-block';
				nuBlock.style.color = 'white';
				nuBlock.style.float = 'left';

				document.getElementById('results').appendChild(nuBlock); 
	 			
				var rg = new RedOrGreen(nuBlock.id);
				if(exRes === result){
					this.pass++;
					nuBlock.innerHTML = funcName;
					rg.makeGreen();
				}
				else{
					nuBlock.innerHTML = funcName;
					rg.makeRed();
				}
				this.count++;
			}
		}


var TestMyCode = {

	 run: function(name, testPar){
			this.name = name;
			testPar(assert);
			
		}

	}

function passed(){

	var nuElem = document.createElement('h1');
	nuElem.id = 'passNum';
	document.getElementById('statusMessage').appendChild(nuElem); 
	nuElem.innerHTML = "Number of tests passed: " + assert.pass + " out of " + assert.count;

}
