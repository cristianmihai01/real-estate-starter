const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const User = require('./models/user.js');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser');
const bcryptSalt = bcrypt.genSaltSync(10);
const JWT_SECRET = 'secret';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,  
    origin: 'http://localhost:3000',
}));


mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.send('test works!');
  });

app.post('/SignUp', async (req, res) => {
    const { name, email, password } = req.body;

    try {
         const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);

    } catch (e) {
        res.status(422).json(e);
    }

});
   
app.post('/SignIn', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
  
    if (userDoc) {
      const passOK = bcrypt.compareSync(password, userDoc.password);
  
      if (passOK) {
        jwt.sign({ 
            email: userDoc.email, 
            id: userDoc._id, 
             
        }, JWT_SECRET, {}, (err, token) => {
          if (err) {
            console.error(err); 
            res.status(500).json('Server error');
          } else {
            res.cookie('token', token).json(userDoc);
          }
        });
      } else {
        res.status(422).json('wrong password');
      }
    } else {
      res.json('user not found');
    }
  });

  app.get('/profile',(req, res ) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, JWT_SECRET, {}, async (err, userData) =>{
            if (err) 
                console.error(err);
                const userDoc = await User.findById(userData.id); 
                res.json(userDoc);
              
        });
    } else {
        res.json({token});
    }
    

  })
  


    



app.listen(5000)