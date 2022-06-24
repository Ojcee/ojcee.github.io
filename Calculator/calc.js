let firstNum = parseFloat(prompt("Please enter First Number:"));
let secNum = parseFloat(prompt("Please enter second Number:"));

let operator = prompt("Enter operator (+, -, /, *)");
let result = 0

if(isNaN(firstNum) || isNaN(secNum)){
    alert("Invalid Input! Refresh and try again")
}else{
    if(operator == '+'){
        result = firstNum + secNum;
    }else if(operator == '-'){
        result = firstNum - secNum;
    }else if(operator == '*'){
        result = firstNum * secNum;
    }else if(operator == '/'){
        result = firstNum / secNum;
    }
    document.write(firstNum + operator + secNum + '=' + result)
}