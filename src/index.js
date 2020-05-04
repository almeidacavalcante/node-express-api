const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express()

const jsonParser = bodyParser.json()
const urlencondedParser = bodyParser.urlencoded({extended: false})

app.use(jsonParser)
app.use(urlencondedParser)

app.get('/', async (req, res) => {
    const { remoteAddress } = req.connection;
    const data = JSON.stringify(remoteAddress);
    fs.writeFileSync(`${Math.random()}-remoteAddress.txt`, data);

    res.sendFile('static/index.html');
})

const port = 13000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))