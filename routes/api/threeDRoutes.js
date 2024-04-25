const express = require('express')
const router = express.Router()
const axios = require('axios')

let count;

axios.get('https://api.sampleapis.com/cartoons/cartoons3D').then(resp => count = resp.data.length)


router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/cartoons/cartoons3D'

    axios.get(url).then(resp => {
        const data = resp.data

        res.render('pages/3d', {
            title:'3D Cartoons',
            name: '3D Cartoons',
            data
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/cartoons/cartoons3D/${id}`

    axios.get(url).then(resp => {
        const data = resp.data

        res.render('pages/3d_single', {
            title: `${data.title}`,
            name: `${data.title}`,
            data,
            count
        })
    })
})

module.exports = router