const express = require('express');
const app = express()
const port = 3000
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    let time = new Date()
    let information = { name: "Aliyan", age: 20, class: "BSCS", date: time }
    res.render('index', { information })
})

app.listen(port, () => {
    console.log('Server is listening on port');
})