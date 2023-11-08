function calculate() {
    var fNum = parseFloat(document.getElementById('fNum').value);
    var sNum = parseFloat(document.getElementById('sNum').value);
    var operator = document.getElementById('operator').value;
    var result = 0;

    switch (operator) {
        case '+':
            result = fNum + sNum;
            break;
        case '-':
            result = fNum - sNum;
            break;
        case '*':
            result = fNum * sNum;
            break;
        case '/':
            result = fNum / sNum;
            break;
        default:
            result = "Неверный оператор";
    }

    document.getElementById('result').innerHTML = "Результат: " + result;
}

document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    calculate();
});
