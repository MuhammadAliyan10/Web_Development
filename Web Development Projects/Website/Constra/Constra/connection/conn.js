const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/constra").then(()=>{
    console.log("The connection connect successfully")
}).catch(()=>{
    console.log("Error while connecting to database")
})