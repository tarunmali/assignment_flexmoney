const express=require('express');
const app=express();
var cors = require('cors')
const connectDB=require('./DB/connection');


app.use(express.json());
app.use(cors())


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json({extended:false}));


app.use('/Api/signup', require('./Api/signup'));
app.use('/Api/signin', require('./Api/signin'));
app.use('/Api/payments', require('./Api/payments'));
app.use('/Api/sessions', require('./Api/sessions'));


connectDB();
const Port= process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
  });


  app.get('/signin', (req, res) => {
    res.send("sign in");
});


app.get('/signup', (req, res) => {
    res.send("signup");
});

app.get('/payments', (req, res) => {
    res.send("Payments");
});

app.get('/sessions', (req, res) => {
    res.send("View Sessions");
});




