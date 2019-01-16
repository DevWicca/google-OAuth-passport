const express =require('express')
const authRoutes = require('./routes/auth-routes') 
const pofileRoutes = require('./routes/profile-routes') 
const mongoose =require('mongoose')
const Keys =require("./config/keys")
const CookieSession =require('cookie-session')
const passport = require('passport')

const app = express()

mongoose.connect(Keys.mangodb.dbURI,{ useNewUrlParser: true },() =>{
    console.log('You Are In Baby *_* Database Is Open')
})


//use cookieSession
app.use(CookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:[Keys.session.cookieKey]
}))
// passport init
app.use(passport.initialize())
// passport with cookie session link
app.use(passport.session())


//  Set up View Engine
app.set('view engine', 'ejs')
// set up routes
app.use('/auth',authRoutes)
// profile routes
app.use('/profile',pofileRoutes)
//  Home Route
app.get("/",(req,res,next)=>{
    res.render('home',{user:req.user})
})


















module.exports = app