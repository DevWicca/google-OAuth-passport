const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth20')

const User = require('../models/user')

//keys
const Keys = require('./keys')


passport.use(new GoogleStrategy({
    // options for te googlestrat
    callbackURL:'/auth/google/redirect',
    clientID:Keys.google.clientID,
    clientSecret:Keys.google.clientSecret

},(accessToken,refreshToken,profile,done) =>{
    // passport callback function
    console.log("passport fun fire yeye")
    console.log(profile)

    new User({
        username:profile.displayName,
        googleId:profile.id
    }).save().then((newUser) => {
        console.log("newUser created",newUser)
    })
})
)