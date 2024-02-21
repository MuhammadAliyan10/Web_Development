const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port | 8060;


app.use('/dist', express.static(path.join(__dirname, '/assets')))

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(port, ()=>{
    console.log(`The application is successfully running on port ${port}`)
}) 