const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const AuthRouter = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true ,  useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error : ', (err)=>{
    console.log(err);
});
db.once('open', function() {
    console.log('connected!');
});

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());
const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`app is running on port : ${PORT}`);
})

app.use('/api',AuthRouter);
