const mongoose = require("mongoose");


mongoose
  .connect('mongodb+srv://manasranjan:zXsSCBwNaHvwFO3i@cluster0-hwlgh.mongodb.net/kitab-e-keeda?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify  : false

  })
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err.message))   

  