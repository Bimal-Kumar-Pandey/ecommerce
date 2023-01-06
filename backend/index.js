const express = require("express");
const cors = require('cors')
const port = 5000;
const bodyparsr = require("body-parser");
app.use(bodyparsr.urlencoded({extended:true}));
app.use(express.json());
app.use(cors(
    {
        origin : "http://localhost:3000/register"
    }
))
const User = require("./models/adminmodel");
const Product  = require("./models/productModel")

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post("/register", function (req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    user.save(function (err) {
        if (err) {
           console.log(err);
        } else {
            res.status(200).json({
                success: true,
                user
            });
        };
    });
 });

 app.post("/login",  async function (req, res) {
   const user =  await User.find({email : req.body.email});
   if(!user){
    res.status(404).json({
        success :false,
        message : "user not found"
    })
   }else{
    res.status(200).json({
        success : true,
        message :"user exist",
        user
    });
   };
 });

 app.get("/details/:id"  , async(req , res) =>{
    const userDetails =  await User.findById(req.params.id);
    if(!userDetails){
        res.status(200).json({
            success : false,
            message : "not found"
        });
    }else{
        res.status(200).json({
            success : true,
            userDetails
        });
    };
 });

//  product routes >>>>>>>>>>>>>>>>>>>>

app.post("/addproduct" ,async (req , res)=>{
    const product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})

app.delete("/addproduct" ,async (req , res)=>{
    const product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
