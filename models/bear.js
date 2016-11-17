var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Personnel', BearSchema);