const  url='';
const mongoose = require('mongoose');
const connectDb=()=>{
    return mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true }).then(res=> console.log("working !"));

}
const db= mongoose.connection
db.on("error", console.error.bind("console, Mongd connection error"));
module.exports =connectDb;
