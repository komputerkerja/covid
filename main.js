const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')

app.use(cors())

app.use(express.static('public'))

app.use('/api', require('./router'))

app.get('/', (req,res) => res.render('home'))

app.get('/detail', (req,res) => res.render('detail'))

app.listen(PORT, () => console.log(`Server running on http://localhost:${5000}`))

