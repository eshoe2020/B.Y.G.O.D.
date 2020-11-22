const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb){
    User.findOne({ googleId: profile.id }, function(err, user){
        console.log(profile)
        if(err) return cb(err);
        if(user) {
            return cb(null, user)
        } else{
            const newUser = new User ({
                name: profile.displayName,
                email: profile.emails[0].value,
                avatarURL: profile.photos[0].value,
                googleId: profile.id
            });

            newUser.save(function(err){
                console.log(newUser)
                if(err) return cb(err);
                return cb(null, user);
            })
        }
    })
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user)
    });
});