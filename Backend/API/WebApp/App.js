const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const port = 5500;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Form submitted successfully!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Send the HTML file
});

app.listen(port, () => {
    console.log("App is running on port", port);
});
