const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserCoreDataSchema = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }         
    }
)

const UserCore = mongoose.model('UserCore', UserCoreDataSchema);

module.exports = UserCore;

module.exports.newUser = function(newUser, callback) {

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
} 

module.exports.checkByEmail = async function(value) {

    return await UserCore.exists({ email: value});
};