const Transaction= require('../models/transaction')

//router get  /api/v1/transactions

exports.getTransactions= async (req, res, next)=>{
   try{
    const transactions= await Transaction.find()

    return res.status(200).send ({
        success:true,
        count:transactions.length,
        data:transactions
    })
   }catch(err){
    return res.status(500).send({
        success: false,
        error: err.message
    })
   }
    
}
//router add  /api/v1/transactions
exports.addTransaction= async (req, res, next)=>{
    try{
    const transaction= await Transaction.create(req.body);
    return res.status(201).send({
        success:true,
        data: transaction
    })
    }catch(err){
        if (err.name==='ValidationError'){
            const messages= Object.values(err.errors).map(val => val.message)
            return res.status(400).send({
                success: false,
                error:messages
            })
        }else{
            return res.status(500).send({
                success: false,
                error: 'Server Error'
            })
        }
    }
   
}
//router delete /api/v1/transactions/:id
exports.deleteTransaction= async (req, res, next)=>{
   try{
    const transaction= await Transaction.findById(req.params.id)
    if(!transaction){
        return res.status(404).send({
            success: false,
            error: 'No Transaction Found'
        })
    }
    await transaction.remove()
    return res.status(200).send({
        success:true,
        data: 'Transaction has been deleted'
    })
   }catch(err){
    return res.status(500).send({
        success:false,
        error: err.message
    })
   }
}