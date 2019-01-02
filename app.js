const express =require('express')
const authRoutes = require('./routes/auth-routes') 
const mongoose =require('mongoose')
const Keys =require("./config/keys")

const app = express()

mongoose.connect(Keys.mangodb.dbURI,{ useNewUrlParser: true },() =>{
    console.log('You Are In Baby *_* Database Is Open')
})
//  Set up View Engine
app.set('view engine', 'ejs')
// set up routes
app.use('/auth',authRoutes)
//  Home Route
app.get("/",(req,res,next)=>{
    res.render('home')
})


















module.exports = app