
var globalVariable = 0;

function doIt(param) {

    globalVariable++;
    param = 2;

    return globalVariable;
}

globalVariable++;
var test = 1;
doIt(test);
console.log(globalVariable);
