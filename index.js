require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send("Hello World!")
})

// KEEP THIS AT THE BOTTOM! (catch-all route)
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)