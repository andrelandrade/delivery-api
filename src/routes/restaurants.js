const express = require('express')
const Restaurant = require('../models/restaurants')
const restaurantController = require('../controllers/restaurantController')

const router = express.Router()

router.get('/', restaurantController.getRestaurants)
router.get('/:id', restaurantController.getRestaurant)
router.post('/', restaurantController.create)
router.delete('/:id', restaurantController.remove)
router.patch('/:id', restaurantController.update)

module.exports = router