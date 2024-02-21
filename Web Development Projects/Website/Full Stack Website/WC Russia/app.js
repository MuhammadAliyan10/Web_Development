//To export module and store into a constant
const express = require('express');
const path = require('path');
const app = express();
const port = 7000;

//To use
app.use('/Static', express.static('Static'))
app.use(express.urlencoded())

//To set
app.set('view engine','pug')
app.set('Views',path.join(__dirname, 'Views'))

//To get
app.get("/",(req,res) =>{
    const parms = {}
    res.status(200).render("home.pug", parms)
})
app.get("/about",(req,res) =>{
    const parms = {}
    res.status(200).render("about.pug", parms)
})
app.get("/ticket",(req,res) =>{
    const parms = {}
    res.status(200).render("ticket.pug", parms)
})
app.get("/stadium",(req,res) =>{
    const parms = {}
    res.status(200).render("stadium.pug", parms)
})
app.get("/contact",(req,res) =>{
    const parms = {}
    res.status(200).render("contact.pug", parms)
})



app.listen(port,()=>{
    console.log(`The application is running on the port of ${port}`)
})