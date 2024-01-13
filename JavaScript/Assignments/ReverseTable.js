const reverseTable = (number) => {
    for (let i = 10; i >= 1; i--) {
        console.log(number + " * " + i + " = " + (i * number));
    }
}

number = 4
reverseTable(number)