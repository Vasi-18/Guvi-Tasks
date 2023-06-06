let outputValue = document.getElementById("output-screen");

function display(num){
    outputValue.value += num;
}

function Calculate(){
    try{
        outputValue.value = eval(outputValue.value); 
    }
    catch(err){
        alert('Invalid Calculation')
    }
}

function Clear(){
    outputValue.value = "";
}

function del(){
    outputValue.value = outputValue.value.slice(0, -1);
}