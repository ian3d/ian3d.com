var express = require('express');
var router = express.Router();
var github = require('simple-github');

/* Get GitHub projects */
router.get('/github', function(req, res, next) {

    var user = typeof req.query.user == 'undefined' ? 'ian3d' : req.query.user;

    github(user, function (err, repos) {
        if(err){
            return res.render('github', {title: 'Ian Hunter - GitHub', error: 'Something went wrong, please try again'});
        }
        var header = user === 'ian3d' ? 'My' : user + '\'s';
        return res.render('github', {title: 'Ian Hunter - GitHub', header: header, body: repos});
    });

});

router.post('/github', function(req,res,next) {
    res.render('github');
});

module.exports = router;
