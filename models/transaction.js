const mongoose= require('mongoose')
const { strict, string } = require('yargs')

const TransactionSchema= new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true, 'Please add some text' ]
    },
    amount:{
        type: Number,
        required:[true, 'Please add a positive or negetive number']
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "userDataBase"
    }
});

const Transaction= mongoose.model('Transaction', TransactionSchema)
module.exports= Transaction