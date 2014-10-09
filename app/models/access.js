// load the things we need
var mongoose = require('mongoose');

// define the schema for our access model
var accessSchema = mongoose.Schema({
        user_id      : String,
        access_point : String,
        datetime     : String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Access', accessSchema);
