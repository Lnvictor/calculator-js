var vision = document.querySelector(".vision");
var operators = document.querySelectorAll(".factor,.operation");
var equalSignal = document.querySelector(".equal");
var clearButton = document.querySelector(".clear");

function addOnVision(expression){
    var previousExpression = vision.value;
    vision.value = previousExpression + expression;
}

function evaluateExpression(element){
    element.value = eval(element.value).toString();
}

function resetResult(element){
    element.value = "0";
}

operators.forEach(operator => {
    operator.onclick = function () {
        addOnVision(operator.innerText);
    };
});

equalSignal.onclick = function (){
    evaluateExpression(vision);
};

clearButton.onclick = function () {
    resetResult(vision);
};