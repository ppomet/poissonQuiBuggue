const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');
const jwtMiddleware = require("../middleware/auth/authentication")

const adminC = new adminController();
const adminUser = {
    username: 'admin',
    password: 'test',
    mail: 'mail@mail.com',
    number: '0601079455',
    adress: 'admin',
    city: 'admin',
    postalCode: '83000'
};

const requireAuth = (req, res, next) => {
    if (req.user === adminUser) {
        next();
    } else {
        res.redirect('/');
    }
};

router.get('/',[jwtMiddleware()], function(req, res, next) {
    console.log(req.user);
    res.render('page/admin', adminC.option());
});

router.post('/', function(req, res, next){
    adminC.test();
});


module.exports = router;
