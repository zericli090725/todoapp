const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName:{
    //     type: String,
    //     required: true
    // },
    // grade: {
    //     type: Number,
    //     required: true
    // },
    // username:{
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // }
    username: {
        type: String,
        required: true,
        min: 5,
        max: 15
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)

