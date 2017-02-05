'use strict';

const express = require('express');
const router = express.Router();


let homeController = require('./controllers/homeController.js');
router.get('/', homeController.index); //homepage

let newsController = require('./controllers/newsController.js');
router.get('/news/s/:term/:num_items?/:offset?', newsController.search); //search news
router.get('/news/:id', newsController.get); //read news

module.exports = router;