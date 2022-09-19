const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
   code : {
    type : Number
   },
   type : {
    type : String
   },
   message : {
    type : String
   }
});

module.exports = mongoose.model('ApiResponse', responseSchema);
