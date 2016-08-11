var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var article_query = require("../models/Articles");
var article = article_query.ArticleModel


router.get('/testArticles', function(req, res, next){
    res.json({"foo": "bar"});
});

router.put('/vote/:articleID', function(req, res, next){
	var articleIDe = req.params.articleID;
	var feeling = req.body.sentiment;
	var legacy_id = req.body.legacyID;
	var publish_date = req.body.publishDate;
    article.VoteHandler(res, articleIDe, feeling, publish_date, legacy_id);
});

router.post('/update', function(req, res) {
    console.log(req.body); // the posted data
});

module.exports = router;