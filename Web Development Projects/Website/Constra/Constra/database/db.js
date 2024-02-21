
const mongoose = require('mongoose')

const new_scheme = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }

})


const Register = new mongoose.model("Constra", new_scheme)
module.exports = Register;