const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./Router/Athu');
require('dotenv').config();  
require('./Config/passport');
const PostRoute = require('./Router/PostRoute');
const ReguserRoute = require('./Router/RegRoute');
const profileCompletion = require('./Router/ProfileRoute')
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/', PostRoute);
app.use('/', ReguserRoute);
app.use('/auth', authRoutes);
app.use('/',profileCompletion)

app.get('/', (req, res) => {
  res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
});

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`<h1>Profile</h1><img src="${req.user.avatar}" alt="${req.user.name}" /><p>${req.user.name}</p><a href="/auth/logout">Logout</a>`);
});

app.listen(port, () => {
  console.log(`Server is started running on ${port}....`);
});
