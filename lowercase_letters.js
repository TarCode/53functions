function lowercase_letters(str){
    str = str.replace(/\s+/g, '');
    var splitStr = str.split("");
    var firstChar = [];
    var letterArr = [];
    var letter = "";
    
    
    for(var x = 0; x < splitStr.length; x++){
        firstChar.push((splitStr[x]));
        
    }

    for(var i = 0; i < firstChar.length; i++){
        letter = firstChar[i].toLowerCase();
        if(firstChar[i] === letter){           
              letterArr.push(firstChar[i]);
        }
    }
            
       
    return letterArr;
}