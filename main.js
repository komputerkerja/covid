const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${5000}`))