const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  category:  {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  } ,
  name: {
    type: String,
    required: true
  },
   photoUrls: [
  ],
  tags : [
    {
        type: Schema.Types.ObjectId,
        ref: 'Tag'   
    }
  ],
  status : {
    type : String,
    enum : ["available","pending","sold"]
  }
  
});

module.exports = mongoose.model('Pet', petSchema);
