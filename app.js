const express = require('express')
const cors = require('cors')
const app = express()
const port = 2022

// Router Zone

// 

app.use(cors())
app.use(express.json())

// app.use Router

// 

app.get('/', (req, res) => {
    res.send({
        message : 'LION-TR READY'
    })
})

app.listen(port, () => console.log('API IS RUNNING AT ' + port))