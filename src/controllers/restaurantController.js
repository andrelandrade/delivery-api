const Restaurant = require('../models/restaurants')

const getRestaurants = (req, res) => {
    return res.status(200).json(Restaurant.getRestaurants())
}

const getRestaurant = (req, res) => {
    const restaurant = Restaurant.getRestaurant(req.params.id)

    if (!restaurant) {
        return res.status(404).json({error: 'Restaurant not found'})
    }
    return res.status(200).json(restaurant)
}

const create = (req, res) => {
    const body = req.body
    const restaurant = new Restaurant(body.name, body.categories)

    return res.status(201).json(Restaurant.save(restaurant))
}

const remove = (req, res) => {
    try {
        return res.status(200).json(Restaurant.delete(req.params.id))
    } catch (err) {
        return res.status(404).send()
    }
    
}

const update = (req, res) => {
    try {
        return res.status(200).json(Restaurant.update(req.params.id, req.body))
    } catch (err) {
        return res.status(404).send()
    }
}

module.exports = { getRestaurants, getRestaurant, create, remove, update }