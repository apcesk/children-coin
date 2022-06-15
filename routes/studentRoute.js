const express = require('express');
const router = express.Router();

const studentController = require('../app/student/studentController')

/* GET home page. */
router.get('/test', studentController.test);

router.get('/:id', studentController.getStudentDetail);
module.exports = router;
