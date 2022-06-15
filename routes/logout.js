const express = require('express');
const router = express.Router();

const requireAuth = (req, res, next) => {
    if (req.user /*req.isAuthenticated()*/) {
        next()
    } else {
        res.redirect('/login');
    }
};

router.get('/', function(req, res, next) {
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        res.redirect('/');
      });
});

module.exports = router;
