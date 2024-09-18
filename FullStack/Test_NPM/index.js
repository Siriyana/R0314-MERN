const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/list', (req, res) => {
    res.send('Listing data from a file!');
});

//Oletusreitti, joka tarjoillaan, mikäli muihin ei päädytty.
app.get('*', (req, res) => {
    res.send('Can not find the requested page', 404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});