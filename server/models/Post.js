const mongoose = require('mongoose');

const TxSchema = mongoose.Schema({
    id: {
        type:Number,
        required: true
    },
    text: {
        type:String,
        required: true
    },
    amount: {
        type:Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Tx",TxSchema);