const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const jsonParser = bodyParser.json()
const urlencondedParser = bodyParser.urlencoded({extended: false})

app.use(jsonParser)
app.use(urlencondedParser)

app.get('/', (req, res) => {
    res.send({message: 'Hello, World'})
})

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))