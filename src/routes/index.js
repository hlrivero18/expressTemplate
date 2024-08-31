const getCharById = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const router = require('express').Router()
const addAnimal = require('../controllers/01-controller')
const titulo = require('../controllers/titulos')


router.get('/character/:id', getCharById)

router.get('/login', login)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)

router.get('/titulo', titulo)

router.post("/animal", (req, res) => {
    try {
      const animal = req.body
      if(animal){
        const obj = {data: addAnimal(animal)}
        res.status(201).json(obj)
      }else{
        const obj = {err: addAnimal(animal)}
        res.status(400).json(obj)
      }
    } catch (error) {
      res.status(500).send(error.message)
    }
  });
module.exports = router