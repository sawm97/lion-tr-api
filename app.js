const express = require('express')
const cors = require('cors')
const app = express()
const port = 2011

// Router Zone
const adminRouter = require('./src/router/adminRouter')
// 

app.use(cors())
app.use(express.json())

// app.use Router
app.use (adminRouter)
// 

app.get('/', (req, res) => {
    res.send({
        message : 'LION-TR READY'
    })
})

app.listen(port, () => console.log('API IS RUNNING AT ' + port))