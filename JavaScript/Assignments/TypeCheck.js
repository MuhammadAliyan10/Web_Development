

const typeCheck = (value) => {
    if (typeof value === 'string') {
        console.log("This is a string value.")
    }
    else if (typeof value === 'boolean') {
        console.log("This is a boolean value.");
    }
    else if (typeof value === 'number') {
        console.log("This is a number.");
    }
    else if (typeof value === 'symbol') {
        console.log("This is a symbol.");
    }
    else if (typeof value === 'function') {
        console.log("This is a function");
    }
    else {
        console.log("Undefined value");
    }
}

typeCheck(a)