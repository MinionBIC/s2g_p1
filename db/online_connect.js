const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('', { useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB Localhost');
    mongoose.set('strictQuery', true);
}).catch((e) => {
    console.log('Error Connecting to MongoDB')
    console.log(e)
})

module.exports = {mongoose}