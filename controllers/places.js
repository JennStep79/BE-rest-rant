const router = require('express').Router()
const { Eraser } = require('react-bootstrap-icons')
const db = require('../models')


// INDEX ROUTE
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// CREATE
router.post('/', (req, res) => {
   db.Place.create(req.body)
   .then(() => {
    res.redirect('/places')
   })
   .catch(err => {
    console.log('err', err)
    res.render('error404')
   })
  }) 

  // NEW
  router.get('/new', (req, res) => {
    res.render('places/new')
  })

  //   DELETE ROUTE
  router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
  })

  //   UPDATE ROUTE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})
  
//   SHOW ROUTE
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
  })

module.exports = router