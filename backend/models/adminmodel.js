const mongoose = require("mongoose");
   mongoose.connect("mongodb://0.0.0.0/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then((resp)=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})


const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }, 
    password :{
        type :String,
        required : true,
        unique : true
    }

  });

  module.exports = mongoose.model("user" , userSchema);
 


