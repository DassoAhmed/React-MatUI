// Import statements
const express = require('express');
const mongoose = require('mongoose');
// const router = require('./routes/product-routes');
require('dotenv').config(); // Load environment variables from .env file

// Middlewares
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Routes
// app.use('/products', router);

// Database connection
mongoose.connect(
    process.env.MONGODB_URI, // Use environment variable for MongoDB URI
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.error("Database connection error:", err);
});

// Start server
const PORT = process.env.PORT || 5000; // Use environment variable for port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});