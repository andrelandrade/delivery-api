const express = require('express')

const router = express.Router()

router.get('/api/status', (req, res) => {
    const status = {
        status: 'online',
        app: 'delivery'
    }

    return res.end(JSON.stringify(status))
})

module.exports = router