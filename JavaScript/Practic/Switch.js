//! It is same like condition but in this use case instead of if else


const switch1 = (a,b,opr)=>{
switch (opr) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);

        break;
    case "*":
        console.log(a * b);

        break;
    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Invalid opreater");
        break;
}
}
opr = "-"
switch1(3,4,opr)