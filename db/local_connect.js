const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/s2g_local', { useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB Localhost');
    mongoose.set('strictQuery', true);
}).catch((e) => {
    console.log('Error Connecting to MongoDB')
    console.log(e)
})

module.exports = {mongoose}