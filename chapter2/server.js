// The address of this server connected to the network is: 
// URL -> http//:localhost:8383
// IP -> 127.0.0.1
const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

// Middleware
app.use(express.json())

// Endpoint - HTTP VERBS(methods) && Routes (or paths)

// Website Endpoints

app.get('/', (req, res) => {
    res.send(`
        <body>
        <h1>This is Homepage</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Goto dashboard</a>
        </body>`
    )
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>This is Dashboard</h1>
        <a href="/">Goto homepage</a>
        </body>`
    )
})

// API Endpoints
// CRUD/Method - create - POST, read - GET, update - PUT, delete - DELETE

app.get('/api/data', (req, res) => {
    console.log("This is for data") 
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('we deleted the element of the end')
    
})

app.listen(PORT, () => console.log(`Server has started on ${PORT}`))