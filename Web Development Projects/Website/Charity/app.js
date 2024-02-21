const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')
const port = process.env.port | 8020;


const public_path = path.join(__dirname, "/public")
app.use(express.static(public_path))

const template_path = path.join(__dirname, "/template/views")
app.set('views', template_path)

const partials_path = path.join(__dirname, "/template/partials")
hbs.registerPartials(partials_path);

app.set('view engine', 'hbs')
app.get('/', (req, res) => {
    res.render("index")
})
app.get('/contact', (req, res) => {
    res.render("contact")
})
app.get('/volunteer', (req, res) => {
    res.render("volunteer")
})
app.get('/ourproject', (req, res) => {
    res.render("ourproject")
})
app.get('/donate', (req, res) => {
    res.render("donate")
})
app.get('/bank', (req, res) => {
    res.render("bank")
})



app.listen(port, () => {
    console.log(`The app is running on the port of ${port}`)
})