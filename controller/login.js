const express = require('express');
const User = require ('../model/user');

class Login {
    constructor() {

    }

    option(){
        return { 
            title: 'Connexion', 
            contact: {
                number: "0601079455",
                mail: ''
            },
        }
    }

    loginValidation(req, res, next){
        // const user = new User({
        //     username : req.body.username,
        //     password : req.body.password
        // });

        // req.login(user, (err)=>{
        //     if(err){
        //         //req.flash('error', err.message);
        //         return res.redirect('/login');
        //     }
        //     passport.authenticate('local')(req, res, (err, user)=>{
        //         if(err){
        //             // req.flash('error', err.message)
        //             return res.redirect('/login');
        //         }
        //         //req.flash('success', 'cool you are connected!');
        //         return res.redirect('/');
        //     })
        // })
    }
}

module.exports = Login;