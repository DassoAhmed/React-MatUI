import express, { Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/productRoutes';
const productModel = require('./model/Product')

//Middlewares
const app = express();
const PORT = 3000;

// Connection to dabase
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/shop',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() =>{
    console.log("Connected to Database")
}).catch(err =>{
    console.log(err);
});

//bodyParser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//cors
app.use(cors())

//routes
routes(app)

app.use('/product', routes);

app.get('/', (req,res) =>{
    productModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))
}
    // res.send(`Our Application Is Running ${PORT}`)
)

app.listen(3000,()=>
    console.log(`Server is running on port ${PORT}`)
)