const express = require('express')
const router = express.Router()


// static files
router.use(express.static('public'))

// 2d page
const twoDRoutes = require('./api/twoDRoutes')
router.use('/2d', twoDRoutes)

// 3d page
const threeDRoutes = require('./api/threeDRoutes')
router.use('/3d', threeDRoutes)


// home page
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: '2D vs 3D Cartoons',
        name: '2D vs 3D Cartoons',
    })
})

// error page 
router.get('*', (req, res)=> {
    if (req.url === '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 ERROR',
            name: '404 ERROR'
        })
    }
})

module.exports = router