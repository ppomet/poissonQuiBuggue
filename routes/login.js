const express = require('express');
const router = express.Router();
const loginController = require("../controller/login");
const loginValidator = require('../middleware/validator/loginValidator');
const dotenv = require('dotenv');

loginC = new loginController();
dotenv.config();

const requireAuth = (req, res, next) => {
    if (req.user) {
        res.dedirect('/home');
    } else {
        next();
    }
};

router.get('/', function(req, res, next) {
    res.render('page/login', loginC.option());
});

router.post('/', function(req, res, next){
    loginValidator;
    loginC.loginValidation(req, res, next);
});


// router.post('/generateToken', function(req, res, next){
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
//     let data = {
//         time: Date(),
//         userId: 12,
//     }
  
//     const token = jwt.sign(data, jwtSecretKey);
  
//     res.send(token);
// });

// router.get('/validateToken', function(req, res, next){
//     let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
//     try {
//         const token = req.header(tokenHeaderKey);
  
//         const verified = jwt.verify(token, jwtSecretKey);

//         if(verified){
//             return res.send("Successfully Verified");
//         }
//         else{
//             // Access Denied
//             return res.status(401).send(error);
//         }
//     } catch (error) {
//         // Access Denied
//         return res.status(401).send(error);
//     }
// });

module.exports = router;
