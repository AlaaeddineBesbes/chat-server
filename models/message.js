const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    sender : String,
    reciever : String,
    message : String
});

module.exports = mongoose.model('message', messageSchema);