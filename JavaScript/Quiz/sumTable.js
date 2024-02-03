const sumTable = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        let c = a + b;
        for (let i = 1; i <= 10; i++) {
            console.log(`${c} * ${i} = ${c * i}`);
        }
    }
    else {
        console.log("Please enter a number.");
    }
}
sumTable(2, 7)