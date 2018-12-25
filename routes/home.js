const express = require('express');
const router = express.Router();
const controller = require('../controllers/home') 

/* GET home page. */
router.get('/', controller.all_articles);
router.get('/list', controller.all_detail_articles);
router.get('/list/:id', controller.detail_article);
router.get('/newest', controller.newest_articles);
router.get('/popular', controller.popular_articles);

module.exports = router;
