//name:Muhmmad Awais
//class:BSCS
//gender:Male
//age:20


const information = { name: "Muhammad Aliyan", class: "BSCS", age: 20, gender: "Male" };

// console.log(information["name"]);
// console.log(information.name);


const person = {
    firstName: "Muhammad",
    lastName: "Zubair",
    id: 5566,
    fullName: function () {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
};

