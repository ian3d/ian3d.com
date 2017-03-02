var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ian Hunter - About', about: 'active' });
});

/* GET contacts page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Ian Hunter - Contact Info', contact: 'active' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Ian Hunter - Projects', projects: 'active' });
});

module.exports = router;
