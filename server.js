const express= require('express')
const dotenv= require('dotenv')
const path= require('path')
const colors= require('colors')
const morgan= require('morgan')
const cors = require("cors");
const connectDB= require('./config/db')
dotenv.config({path: './config/config.env'})
connectDB()
const transactions= require('./routes/transactions')
const users = require("./routes/users")
const app=express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV=== 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)
app.use("/api/v1/users", users)

if(process.env.NODE_ENV=== 'production'){
app.use(express.static('client/build'))

app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}` .yellow.bold)
})
