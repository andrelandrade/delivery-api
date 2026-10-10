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

    if (method === 'POST' && url === '/api/restaurants') {
        const data = []
        
        req.on('data', (chunk) => {
            data.push(chunk)
        })

        req.on('end', () => {
            const body = Buffer.concat(data).toString()
            
            try {
                JSON.parse(body)

                res.statusCode = 201

                return res.end(body)
            } catch (err) {
                res.statusCode = 400
                res.end()
            }
        })
    }

    else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(process.env.PORT || 3000)