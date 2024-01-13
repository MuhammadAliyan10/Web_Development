const calculator = (num1, num2, opreator) => {
    switch (opreator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}

number1 = 10
number2 = 20
opr = "*"
calculator(number1, number2, opr)