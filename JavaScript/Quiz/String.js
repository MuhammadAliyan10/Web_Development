const StringFun = (value) => {
    if (typeof value === 'string') {
        let a = value.slice(0, 1)
        let b = value.slice(-1)
        let c = a.toUpperCase()
        let d = b.toUpperCase()
        let g = value.slice(1, value.length - 1)
        let Result = c.concat(g)
        let finalResult = Result.concat(d)
        console.log(finalResult);

        value.length > 5 ? console.log("The length is Greater.") : console.log("The length is Lower.");
    }

    else {
        console.log("Please provide a string value.");
    }
}

StringFun("usama")