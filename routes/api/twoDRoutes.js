const express = require('express')
const router = express.Router()
const axios = require('axios')
let count; //set count for next & prev

// gets count as soon as enter page
axios.get('https://api.sampleapis.com/cartoons/cartoons2D').then(resp => count = resp.data.length)

// localhost:3000/2d
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/cartoons/cartoons2D'

    axios.get(url).then(resp => {
        // console.log(resp), checks if getting data in gitbash
        res.render('pages/2d', {
            title: '2D Cartoons',
            name: '2D Cartoons',
            data: resp.data
        })
    })
})


// localhost:3000/2d/:title
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const url = `https://api.sampleapis.com/cartoons/cartoons2D/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        // console.log(data)
        res.render('pages/2d_single', {
            title: `${data.title}`,
            name: `${data.title}`,
            data,
            count
        })
    })
})


module.exports = router