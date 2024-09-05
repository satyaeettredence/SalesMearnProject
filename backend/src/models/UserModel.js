const mongoose = require('mongoose');
const uniqueValidatior = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
});

userSchema.plugin(uniqueValidatior);
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;