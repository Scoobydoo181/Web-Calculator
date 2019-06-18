function setCalcText(symbol) {
  
    if(document.getElementById("output").innerHTML == 0.0) {
        document.getElementById("output").innerHTML = symbol;
    }
    else if(document.getElementById("output").innerHTML.length == 9) {
        
    }
    else {
        document.getElementById("output").innerHTML += symbol;
    }
    
}

function clearCalcText() {
    document.getElementById("output").innerHTML = "0.0"
}

function evaluateCalcText() {
    document.getElementById("output").innerHTML = eval(document.getElementById("output").innerHTML) ;
}