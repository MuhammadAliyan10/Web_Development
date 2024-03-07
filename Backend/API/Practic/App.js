const express = require('express');
const app = express();
const port = 5000

app.listen(port, () => {
    console.log("Your server is running on port " + port);
})
app.use(express.json())

app.post('/login', (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(404).send("Please enter something.")
    }
    else {
        res.status(200).send(`Your name is ${name}, email is ${email}, passoword is ${password}.`)
    }
})

app.get('/', (req, res) => {
    res.send("Did You got the data?")
})