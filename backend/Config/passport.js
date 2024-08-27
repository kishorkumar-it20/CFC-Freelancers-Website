const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleUser = require('../Schema/GoogleUser');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "" 
},
async (token, tokenSecret, profile, done) => {
  const { id, displayName, emails, photos } = profile;
  const googleUser = await GoogleUser.findOneAndUpdate(
    { googleId: id },
    { googleId: id, name: displayName, email: emails[0].value, avatar: photos[0].value },
    { new: true, upsert: true }
  );
  return done(null, googleUser);
}));

passport.serializeUser((googleUser, done) => {
  done(null, googleUser.id);
});

passport.deserializeUser(async (id, done) => {
  const googleUser = await GoogleUser.findById(id);
  done(null, googleUser);
});
