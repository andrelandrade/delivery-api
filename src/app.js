const express = require('express')

const app = express()

const restaurants = [
    { id: 1, name: 'Pizzaria Central', categories: ['PIZZA', 'ITALIAN'] },
    { id: 2, name: 'Churrascaria Boi Na Brasa', categories: ['MEAT', 'BARBECUE']},
    { id: 3, name: 'Sushi Dojo', categories: ['JAPANESE', 'SUSHI'] }
]

app.get('/api/status', (req, res) => {
    const status = {
        status: 'online',
        app: 'delivery'
    }

    return res.end(JSON.stringify(status))
})

app.get('/api/restaurants', (req, res) => {
    return res.end(JSON.stringify(restaurants))
})

app.get('/api/restaurants/:id', (req, res) => {
    const id = req.params.id

    const restaurant = restaurants.find(r => r.id == id)

    if (!restaurant) {
        res.statusCode = 404
    }

    return res.end(JSON.stringify(restaurant))
})

module.exports = app