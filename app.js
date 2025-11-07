const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const alienRoutes = require('./routes/alienRoutes');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alienDB')
.then(() => console.log("Connected to MongoDB!"))
.catch(err => console.error("MongoDB connection error:", err));

//Middleware
app.use(bodyParser.json());

//Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Alien API' });
});

//alien route
app.use('/aliens', alienRoutes);

//404 handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

//error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something broke!' });
});

//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});