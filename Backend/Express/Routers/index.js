const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public', { root: __dirname }))
app.get('/', (req, res) => {
    res.sendFile('main.txt')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})