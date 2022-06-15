const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require('validator');


const userSchema = new Schema(
    {
        // _id: {     
        //     type: Number,
        //     unique: true
        // },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 4,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('Password cannot contain "Password"');
                }
             }
        },
        mail:{
            type: String,
            required: true,
            unique: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid');
                }
            }
        },
        number:{
            type: Number,
            required: true
        },
        adress:{
            type: String,
            required: true
        },
        adressSup:{
            type: String,
            required: false
        },
        postalCode:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true,
            default: "user"
        }

    },
);

const userModel = mongoose.model('userModel', userSchema);

// User.prototype.validPassword = async (password) => {
//     return await bcrypt.compare(password, this.password);
//   };

module.exports = userModel;