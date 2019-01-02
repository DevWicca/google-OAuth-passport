const router = require('express').Router()
const passport = require('passport')
const passportSetup = require('../config/passport-setup')



// auth login 
router.get('/login',(req,res,next) => {
    res.render('loging')
})

// auth logout
router.get('/logout',(req,res,next)=>{
    // handle with passport

    res.send('log out with log out')
})

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

// callback route for google
router.get('/google/redirect',passport.authenticate('google'),(req,res) =>{
    res.send('You got it the callback')
})

module.exports = router