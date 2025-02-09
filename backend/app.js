//Import statements
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/product-routes')
const cors = require('cors')
const app = express(); 

//Middlewares
app.use(cors());

//routes
app.get('/shop', productRoutes);
//Connections and PORT
mongoose.connect("http://127.0.0.1:27017/shop",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
     console.log("connected to Database")
}).catch(err =>{
    console.log(err)
});

app.listen(3000);
