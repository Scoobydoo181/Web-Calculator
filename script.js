document.addEventListener("keydown", keyEventHandler(event));

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

function keyEventHandler(event) {
    
    console.log(event.key);
    setCalcText(event.key)
    switch(event.key) {
        case '(':
            setCalcText('(');
            break;

        case ')':
            setCalcText(')');
            break;

        case 'C':
            clearCalcText();
            break;
        
        case '7':
            setCalcText('7');
            break;

        case '8':
            setCalcText('8');
            break;

        case '9':
            setCalcText('9');
            break;    


        case '4':
            setCalcText('4');
            break;

        case '5':
            setCalcText('5');
            break;

        case '6':
            setCalcText('6');
            break;
        
        case '1':
            setCalcText('1');
            break;

        case '2':
            setCalcText('2');
            break;

        case '3':
            setCalcText('3');
            break;   

        case '/':
            setCalcText('/');
            break;

        case '*':
            setCalcText('*');
            break;

        case '-':
            setCalcText('-');
            break;
        
        case '+':
            setCalcText('+');
            break;

        case '.':
            setCalcText('.');
            break;

        case '0':
            setCalcText('0');
            break;    


        case '=':
            evaluateCalcText();
            break;


































    }
}