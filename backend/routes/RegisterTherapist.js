const express = require('express');
const router = express.Router();
const  registerTherapist  = require('../controllers/therapistControllerSW.js');


router.post('/therapist', registerTherapist);


module.exports = router;
