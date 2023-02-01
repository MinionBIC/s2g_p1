const mongoose = require('mongoose');

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
            type: mongoose.Types.email,
            required: true
        }         
    }
)