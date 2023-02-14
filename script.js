//1 display number in text box
 function displayNumber(num){
    result.value+=num
    // console.log(num);

 }


//2 clear text box
function clearBox(){
    result.value=""
}

//3 evaluate expression
function evaluateExpression(){
    // exp=result.value//7+7
    // output=eval(exp)//14
    // result.value=output
    result.value=eval(result.value)
}

//4 Remove last item from text box

function removeLastItem(){
    currentExp=result.value
    result.value=currentExp.slice(0,-1)
}