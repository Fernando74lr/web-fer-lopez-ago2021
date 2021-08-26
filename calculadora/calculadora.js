
// Display
const value = $('#value');

// Button clear
const btn_clear = $('#btn-clear');

let stack = [];
let num = 0;
let tmp = 0;
let operators = ['+', '-', 'x', '÷', '^'];
let specials = ['^2', 'sqrt'];
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const perform_operation = (a, b, op) => {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case 'x': return a * b;
        case '÷': return a / b;
        case '^': return Math.pow(a, b);
        default: return 0;
    }
}

const clear_display = () => {
    value.html('0');
    stack = [];
    num = 0;
}

const change_display = (e) => {
    const current_value = value.text() === '0' ? '' : value.text();
    let new_value = e.target.innerHTML;   
    
    // Is number
    if (digits.includes(new_value)) {
        num += new_value;
    }
    
    // Is operator
    if (operators.includes(new_value)) {
        num = parseFloat(num);
        stack.push(num);
        stack.push(new_value);
        num = '';
    }

    // Give result
    if (new_value === '=') {
        if (stack.length < 2) {
            num = parseFloat(num);
            value.html(num);
        } else {
            num = parseFloat(num);
            stack.push(num);
            num = perform_operation(stack[0], stack[2], stack[1]);
            stack = []
            value.html(parseFloat(Math.round(num * 100) / 100).toFixed(2));
        }
    } else {
        // Specials
        if (specials.includes(new_value)) {
            num = parseFloat(num);
            stack.push(num);
            stack.push(new_value);
            
            if (new_value === '^2') {
                num = Math.pow(num, 2);
                stack = []
                value.html(parseFloat(Math.round(num * 100) / 100).toFixed(2));
            }
            
            if (new_value === 'sqrt') {
                num = Math.sqrt(num);
                stack = []
                value.html(parseFloat(Math.round(num * 100) / 100).toFixed(2));
            }

        } else {
            value.html(current_value + new_value);
        }
    }
}

// Numbers
$('#num-0').click(function (e) { change_display(e) });
$('#num-1').click(function (e) { change_display(e) });
$('#num-2').click(function (e) { change_display(e) });
$('#num-3').click(function (e) { change_display(e) });
$('#num-4').click(function (e) { change_display(e) });
$('#num-5').click(function (e) { change_display(e) });
$('#num-6').click(function (e) { change_display(e) });
$('#num-7').click(function (e) { change_display(e) });
$('#num-8').click(function (e) { change_display(e) });
$('#num-9').click(function (e) { change_display(e) });

// Operators
$('#btn-equal').click(function (e) { change_display(e) });
$('#btn-plus').click(function (e) { change_display(e) });
$('#btn-minus').click(function (e) { change_display(e) });
$('#btn-times').click(function (e) { change_display(e) });
$('#btn-div').click(function (e) { change_display(e) });
$('#btn-square').click(function (e) { change_display(e) });
$('#btn-sqrt').click(function (e) { change_display(e) });
$('#btn-pow').click(function (e) { change_display(e) });

// Button clear
$('#btn-clear').click(function (e) { clear_display() });