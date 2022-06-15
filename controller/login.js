const express = require('express');
const User = require ('../model/user');
const jwt = require("jsonwebtoken");

const loginValidator = async (req,res,next) => {
    const uName = req.body.username;
    const pass = req.body.password;

    const foundUser = await User.findOne({username: uName});
    // console.log(foundUser);
    if (!foundUser) {
        res.status(418).render('404');
    } else if (req.body.password === foundUser.password) {
        const token = jwt.sign({number: foundUser.number, mail: foundUser.mail}, process.env.JWT_SECRET_KEY);
        console.log(token);
        res.json({token});
    } else {
        res.send("wrong password bro !")
    }

    // res.status(418).json({teapot: "yeah"});
}

const mockedOptions = { 
    title: 'Connexion', 
    contact: {
        number: "0601079455",
        mail: ''
    },
}

module.exports = {loginValidator, mockedOptions};