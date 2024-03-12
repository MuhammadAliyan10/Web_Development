import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

})
app.post('/', (req, res) => {
    console.log(req)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
