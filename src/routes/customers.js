const express = require('express')

const router = express.Router()

router.post('/api/customers', (req, res) => {
    res.status(201)
    return res.send(JSON.stringify(req.body))
})

module.exports = router