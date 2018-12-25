const express = require('express');
const router = express.Router();
const controller = require('../controllers/my_dashboard') 

/* GET home page. */
router.post('/', controller.create_article);
router.delete('/', controller.delete_article);
router.put('/', controller.edit_article);
router.get('/', controller.articles_by_writer);


module.exports = router;
