const express = require('express')
const needle = require('needle')
const router = express.Router()
const url = require('url')

// q=kebakaran&from=2021-03-10&sortBy=popularity
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

router.get('/', async (req,res) => {
    try{
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query
        })
    
        const apiResult = await needle('get', `${API_BASE_URL}?${params}`)
    
        const data = await apiResult.body

        res.status(200).json(data)
        
    }catch(error){
        res.status(500).json(error)
    }

})


module.exports = router