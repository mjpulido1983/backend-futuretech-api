const mongoose = require('mongoose')

const urlDB ='mongodb+srv://admin:admin@cluster0.tj6m8.mongodb.net/futuretech?retryWrites=true&w=majority'
mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("conectado a la bd")
})