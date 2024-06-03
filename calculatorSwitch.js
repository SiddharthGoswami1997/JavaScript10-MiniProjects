function calculate() {
    let num1 = parseInt(document.getElementById('data1').value);
    let num2 = parseInt(document.getElementById('data2').value);
    let operator = document.getElementById('operator').value;

    switch(operator) {
        case 'plus':
            console.log(num1 + num2);
            break;
        case 'minus':
            console.log(num1 - num2);
            break;
        case 'multiply':
            console.log(num1 * num2);
            break;
        case 'divide':
            if (num2 !== 0) {
                console.log(num1 / num2);
            } else {
                console.log('Error: Division by zero');
            }
            break;
        default:
            console.log('Please select a valid operator');
    }
}
