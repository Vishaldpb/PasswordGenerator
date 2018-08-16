var keyList = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp='';

function generatePassword(pLength){
    temp="";
    for(var i=0; i<pLength; i++){
        temp+=keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return temp;
}

function pass(enterlength){
    document.passGen.output.value= generatePassword(enterlength);    
}



