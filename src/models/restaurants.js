const restaurants = [
    { id: 1, name: 'Pizzaria Central', categories: ['PIZZA', 'ITALIAN'] },
    { id: 2, name: 'Churrascaria Boi Na Brasa', categories: ['MEAT', 'BARBECUE']},
    { id: 3, name: 'Sushi Dojo', categories: ['JAPANESE', 'SUSHI'] }
]

let lastId = (restaurants.length != 0) ? Math.max(...restaurants.map(user => user.id)) : 0

class Restaurant {
    constructor(name, categories) {
        this.id = ++lastId
        this.name = name
        this.categories = categories
    }

    static save(restaurant) {
        restaurants.push(restaurant)

        return restaurant
    }

    static delete(id) {
        const restaurant = this.#getRestaurantOrError(id)

        const index = restaurants.findIndex(r => r.id == id)
        restaurants.splice(index, 1)

        return restaurant
    }

    static update(id, restaurantDto) {
        const restaurant = this.#getRestaurantOrError(id)

        if (restaurantDto.name) restaurant.name = restaurantDto.name
        if (restaurantDto.categories) restaurant.categories = restaurantDto.categories

        return restaurant
    }

    static getRestaurant(id) {
        return restaurants.find(r => r.id == id)
    }

    static getRestaurants() {
        return restaurants
    }

    static #getRestaurantOrError(id) {
        const restaurant = this.getRestaurant(id)

        if (!restaurant) {
            throw Error("Restaurant not found")
        }

        return restaurant
    }
 }

module.exports = Restaurant