const express = require('express')

const app = express()

const restaurantsRouter = require('./routes/restaurants')
const customersRouter = require('./routes/customers')
const statusRouter = require('./routes/status')

app.use(express.json())

app.use('/restaurants', restaurantsRouter)
app.use(customersRouter)
app.use(statusRouter)

app.use((req, res, next) => {
    res.status(404).send(JSON.stringify({ error: "Route not found" }))
})

module.exports = app