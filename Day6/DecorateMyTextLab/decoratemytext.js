
alert("Hello, World!");
document.getElementById("btn3").onclick= function(){
    alert("Hello, World!");
}

document.getElementById("btn4").onclick=function(){
    document.getElementById("textarea4").style.fontSize="24pt";
}

 function interval(){
    var id = setInterval(enlargeText,500);
    setTimeout(clearInterval,5000,id);
}

function enlargeText(){
   var curSize = window.getComputedStyle(document.getElementById("textarea6")).fontSize;
    newProp = parseInt(curSize) + 2 + "pt";
    document.getElementById("textarea6").style.fontSize=newProp;
}

document.getElementById("btn6").onclick=function(){
    var id = setInterval(enlargeText,500);
    setTimeout(clearInterval,5000,id);
}

document.getElementById("checkbox5").onchange=function(){
    if(document.getElementById("checkbox5").checked == true){
        document.getElementById("textarea5").style.fontWeight="bold";
        document.getElementById("textarea5").style.color="green";
        document.getElementById("textarea5").style.textDecoration="underline";
        
    }else{
        document.getElementById("textarea5").style.fontWeight="normal";
        document.getElementById("textarea5").style.color="black";
        document.getElementById("textarea5").style.textDecoration="none";
    }
}

document.getElementById("btn71").onclick=function pig(){
    var words = document.getElementById("textarea7").value;
    var splittedword = words.split(/\s+/);
     var result = "";
    for(var i = 0; i<splittedword.length; i++){
        if(splittedword[i].charAt(0).match("[aeoiuAEOIU]")){
            changed = splittedword[i] + "ay";
        }else{
            var word = splittedword[i];
            for(var j=1;j<word.length;j++){
                    if(word[j].match("[aeoiuAEOIU]")){
                    var changed =  word.substring(j) + word.substring(0,j) +  "ay";
                    break;
                }
                
            }
        }
        result += changed + " ";

    }
    document.getElementById("textarea7").value = result;
}

document.getElementById("btn72").onclick=function (){

    var words=document.getElementById("textarea7").value;
    var arr = words.split(/\s+/);
    var result = "";
    for(let i=0; i< arr.length; i++){
        if(arr[i].length>=5){
            arr[i] = "Malkovitch";
        }
        result +=arr[i] + " ";
    }
    document.getElementById("textarea7").value= result;
}


