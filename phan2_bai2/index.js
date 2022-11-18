function solve(){
    var firstNumber = document.getElementById("firstnumber").value;
    var secondNumber = document.getElementById("secondnumber").value;
    var operator = document.getElementById("operator").value;
    for(let i = 0;i<firstNumber.length;i++){
        if(firstNumber[i] < '0' || firstNumber[i] > '9'){
            alert("First Number is not a number");
            return;
        }
    }
    for(let i = 0;i<secondNumber.length;i++){
        if(secondNumber[i] < '0' || secondNumber[i] > '9'){
            alert("Second Number is not a number");
            return;
        }
    }
    if(firstNumber.length == 0){
        alert("Not enter First Number");
        return;
    }
    if(secondNumber.length == 0){
        alert("Not enter Second Number");
        return;
    }
    if(operator == "+"){
        document.getElementById("result").innerHTML = Number(firstNumber)+Number(secondNumber);
    }
    else if(operator == "-"){
        document.getElementById("result").innerHTML = Number(firstNumber)-Number(secondNumber);
    }
    else if(operator == "x"){
        document.getElementById("result").innerHTML = Number(firstNumber)*Number(secondNumber);
    }
    else if(operator == "/"){
        document.getElementById("result").innerHTML = Number(firstNumber)/Number(secondNumber);
    }
    else{
        document.getElementById("result").innerHTML = Math.pow(Number(firstNumber),Number(secondNumber));
    }
}