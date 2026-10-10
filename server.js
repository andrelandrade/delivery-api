const { stat } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url

    if (method === 'GET' && url === '/api/status') {
        const status = {
            status: "online",
            app: "delivery"
        }

        return res.end(JSON.stringify(status))
    }
})

server.listen(process.env.PORT || 3000)