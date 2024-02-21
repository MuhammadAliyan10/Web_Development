const express = require('express')
const path = require('path')
const app = express();
const hbs = require('hbs');
const Register = require('./database/db');
const port = process.env.port | 8090;
require("./connection/conn")



const public_path = path.join(__dirname, '/public')
app.use(express.static(public_path))
app.use(express.urlencoded({ extended: false }))

const template_path = path.join(__dirname, '/template/views')
app.set('views', template_path)

const partial_path = path.join(__dirname, '/template/partials')
hbs.registerPartials(partial_path);


app.set('view engine', 'hbs')
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/services', (req, res) => {
    res.render('services')
})
app.get('/404', (req, res) => {
    res.render('404')
})
app.post('/contact', async (req, res) => {

    try {
        const get_message = new Register({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        await get_message.save();
        res.status(201).render('contact')



    } catch (error) {
        console.log(error)

    }

})





app.listen(port, () => {
    console.log(`The application is running on the port on ${port}`)
})