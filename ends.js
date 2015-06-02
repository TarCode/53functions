function ends(str) {
    var splitStr = str.split(" ");
    var lastChar = [];
    var letterMap = {};
    var letter = "";
    var count = 0;
    var mostLetter = "";
    
    for(var x = 0; x < splitStr.length; x++){
        lastChar.push((splitStr[x].slice(-1)).toUpperCase());
        
    }

    for(var i = 0; i < lastChar.length; i++){
        for (var y = 0; y < lastChar.length; y++){
            if(lastChar[i] === lastChar[y]){
                count++;
           
              letterMap[lastChar[i]] = count;
               
            }


        }
        count = 0;
    }
    var max = 0, x;
    for( x in letterMap) {
        if( letterMap[x] > max){ 
            max = letterMap[x];
            mostLetter = x;
        }
    }
    return mostLetter;
}