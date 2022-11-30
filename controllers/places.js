const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

router.get('/', (req, res) => {
    let places = [{
        name: 'Freddy\'s',
        city: 'Henderson',
        state: 'NV',
        cuisines: 'American',
        pic: '/images/freddys.jpg'
    }, {
        name: 'Sushi-wa',
        city: 'Henderson',
        state: 'NV',
        cuisines: 'Japanese',
        pic: 'images/sushi.jpg'
    }]
    res.render('places/index', { places })
})

module.exports = router