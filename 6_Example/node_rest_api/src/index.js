require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const userRoutes = require('./routes/userRoutes')
const PORT = process.env.PORT || 5000

app.use('/api', userRoutes)

app.listen(PORT, () => console.log('Running on http://localhost:5000'))
