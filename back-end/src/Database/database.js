const mongoose = require('mongoose');

const connectioDatabase = url => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => console.log(">> Database successfully connected"))
    .catch(erro => console.log(`>> It was bad: ${erro}`))
}


module.exports = connectioDatabase