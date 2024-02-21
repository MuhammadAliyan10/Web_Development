const express = require('express')
const path = require('path')
const app = express();
const port = 8000;



app.use('/Static',express.static('Static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('Views', path.join(__dirname, 'Views'))

app.get("/", (req,res) =>{
    const parms = {}
    res.status(200).render('home.pug', parms)
})
app.get("/home", (req,res) =>{
    const parms = {}
    res.status(200).render('index.pug', parms)
})
app.get("/about", (req,res) =>{
    const parms = {}
    res.status(200).render('about.pug', parms)
})
app.get("/compeny", (req,res) =>{
    const parms = {}
    res.status(200).render('compeny.pug', parms)
})
app.get("/services", (req,res) =>{
    const parms = {}
    res.status(200).render('services.pug', parms)
})
app.get("/contact", (req,res) =>{
    const parms = {}
    res.status(200).render('contact.pug', parms)
})


app.listen(port, () =>{
    console.log(`The application is successfully running on port ${port}`)
})




