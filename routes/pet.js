const express = require('express');


const {addPet,uploadImage,getOne,updatePet,deletePet} = require('../controllers/pet')

const router = express.Router();

router.get('/pet/:petId',getOne);
router.post('/pet',addPet)
router.post('/pet/:petId/uploadImage',uploadImage);
router.put('/pet/:petId',updatePet)
router.delete('/pet/:petId',deletePet)

module.exports = router;
