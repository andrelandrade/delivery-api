const express = require('express')

const router = express.Router()

const restaurants = [
    { id: 1, name: 'Pizzaria Central', categories: ['PIZZA', 'ITALIAN'] },
    { id: 2, name: 'Churrascaria Boi Na Brasa', categories: ['MEAT', 'BARBECUE']},
    { id: 3, name: 'Sushi Dojo', categories: ['JAPANESE', 'SUSHI'] }
]

router.get('/api/restaurants', (req, res) => {
    return res.end(JSON.stringify(restaurants))
})

router.get('/api/restaurants/:id', (req, res) => {
    const id = req.params.id

    const restaurant = restaurants.find(r => r.id == id)

    if (!restaurant) {
        res.statusCode = 404
    }

    return res.end(JSON.stringify(restaurant))
})

router.post('/api/restaurants', (req, res) => {
    res.status(201)
    return res.send(JSON.stringify(req.body))
})

module.exports = router