const resultCounter = (name, marks, choice) => {
    if (typeof name === 'string') {
        let totalMarks = 500;
        switch (choice) {
            case 't':
                let result = 0
                for (let i = 0; i < marks.length; i++) {
                    result = marks[i] + result;
                }
                console.log(`The student name ${name} has got number ${result}.`);
                break;
            case 'p':
                let result2 = 0
                for (let i = 0; i < marks.length; i++) {
                    result2 = marks[i] + result2
                }
                let persentage = (result2 / totalMarks) * 100
                console.log(`The student name ${name} has got total persentage ${persentage}%.`)
                break;
            default:
                console.log("Invalid value");
                break;
        }

    }
    else {
        console.log("Wrong datatype of parameter");

    }

}
let marks = [90, 43, 56, 43, 23]
let na = "Aliyan"
let opr = 't'
resultCounter(na, marks, opr)