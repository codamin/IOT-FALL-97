//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://maiot:utamin329@ds145704.mlab.com:45704/maiot';
mongoose.connect(mongoDB);
// Get Mongoose to use th//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
// var mongoDB = 'mongodb://maiot:utamin329@ds145704.mlab.com:45704/maiot';
// mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;

var userschema = new Schema({
    gpname: {
        type: String,
        required: [true, 'Must have name']
    },
    gppass: {
        type: Number,
        required: [true,'Must have password']
    }
    // mem0: {
    //     type: String
    // },
    // mem1: {
    //     type: String
    // },
    // mem2: {
    //     type: String
    // }
});

module.exports = mongoose.model('User', userschema );