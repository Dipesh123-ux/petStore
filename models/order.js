const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    petId :{
        type : Number
    },
    quantity : {
        type : Number
    },
    shipDate : {
        type : Date
    },
    status : {
        type : String,
        enum : ['placed','approved','delivered']
    },
    complete : {
        type : Boolean
    }
  
});

module.exports = mongoose.model('Order', orderSchema);
