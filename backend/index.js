import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/productRoutes';

const app = express();
const PORT = 3000;

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/shop')

//bodyParser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//cors
app.use(cors())

routes(app)

app.get('/', (req,res) =>
    res.send(`Our Application Is Running ${PORT}`)
)

app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`)
)