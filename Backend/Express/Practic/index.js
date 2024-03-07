const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello bro")
})

app.get("/blog", (req, res) => {
    res.send(`This is my blog`);
})
app.get("/blog/:id", (req, res) => {
    res.send(`The id of the blog is ${req.params.id}`);
})
app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
})