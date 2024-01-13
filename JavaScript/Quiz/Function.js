const firstFunction = (name, number) => {
    console.log("My name is " + name);
    for (let i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = " + (i * number))

    }
    for (let j = 0; j <= number; j++) {
        console.log("The value of j is " + j);

    }
    console.log("The square of the number is " + (number * number));
}

n = "Aliyan"
v = 17
firstFunction(n, v)