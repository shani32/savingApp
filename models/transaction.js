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
    }
})

const Transaction= mongoose.model('Transaction', TransactionSchema)
module.exports= Transaction