//import statements
const express = require('express');
const mongoose = require('mongoose');
// const router = require('./routes/product-routes');



//Middlewares

const app = express();


//routes

// app.use('/products', router);

//connections and port
mongoose.connect(
    "mongodb+srv://dassoahmed:655838075Ma$@cluster0.utf3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }    
).then(() => {
    console.log("Connected to Database");
    
}).catch(err =>{
   console.log(err);
});

app.listen(5000);

