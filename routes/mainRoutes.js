const express = require('express');
const router = express.Router();

const controller = require('../controllers/eventController');

// /GET stories: send all stories to user

router.get('/', controller.index);

// /GET stories/new: send a new page to create a new story

router.get('/about', controller.about);

// /POST /stories create a new story
router.get('/contact', controller.contact);

// GET error
router.get('/error', controller.error)

// export router
module.exports = router;