var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btnClr = document.getElementById("btnClr");
var btnEql = document.getElementById("btnEql");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var res = document.getElementById("res");

var operands = [];
var op = 0;

function readOperand() {
    //console.log("raw = " + res.innerHTML);
    operands.push(parseInt(res.innerHTML, 2));
    //console.log("int = " + operands)
}

btn0.onclick = function() {
    res.innerHTML += '0';
}
btn1.onclick = function() {
    res.innerHTML += '1';
}

btnClr.onclick = function() {
    res.innerHTML = "";
}

btnEql.onclick = function() {
    readOperand();
    switch (op) {
        case 1:
            result = operands[0] + operands[1];
            break;
        case 2:
            result = operands[0] - operands[1];
            break;
        case 3:
            result = operands[0] * operands[1];
            break;
        case 4:
            result = Math.floor(operands[0] / operands[1]);
            break;
        default:
            break;
    }
    operands = [];
    res.innerHTML = result.toString(2);
    //console.log("raw result = " + result);
    //console.log("binary result = " + result.toString(2));
    op = 0;
}

btnSum.onclick = function() {
    readOperand();
    op = 1;
}

btnSub.onclick = function() {
    readOperand();
    op = 2;
}

btnMul.onclick = function() {
    readOperand();
    op = 3;
}

btnDiv.onclick = function() {
    readOperand();
    op = 4;
}