const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/banking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, ()=>{
    console.log('Mongodb connected Successfully');
});

module.exports = mongoose;
