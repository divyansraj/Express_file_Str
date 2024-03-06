const express = require('express')

const {PORT} = require('./config/index')

const app = express()
const apiRoutes = require('./routes')
app.use('/api' , apiRoutes)

app.listen(PORT, () => {
    console.log('Successfully connected to the port at', PORT)
})
