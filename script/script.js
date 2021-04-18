function fAdd() {
    var operands = getOperands();
    if (operands) {
        var output = operands.operand1 + ' + ' + operands.operand2 + ' = ' + (operands.operand1 + operands.operand2);
        setOutput(output);
    }
}
function fMulti() {
    var operands = getOperands();
    if (operands) {
        var output = operands.operand1 + ' x ' + operands.operand2 + ' = ' + (operands.operand1 * operands.operand2);
        setOutput(output);
    }
}

function fDivide() {
    var operands = getOperands();
    if (operands) {
        var output = operands.operand1 + ' : ' + operands.operand2 + ' = ' + (operands.operand1 / operands.operand2);
        setOutput(output);
    }
}
function fClear() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").value = "";
}

function getOperands() {
    var operand1 = parseFloat(document.getElementById("input1").value);
    var operand2 = parseFloat(document.getElementById("input2").value);
    if (!isNaN(operand1) && !isNaN(operand2))
        return { operand1, operand2 }
    else {
        fClear();
        alert('You need to enter valid inputs');
        return null;
    }
}

function setOutput(output) {
    document.getElementById("output").value = output;
    console.log(output);
}