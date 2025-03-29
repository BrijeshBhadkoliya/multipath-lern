const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// conection database 
const coneection = () =>{
    try {
            mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.log('MongoDB connection failed:', error.message); 
    }
} 
coneection(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '../client')));
app.use("/uploads",express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static('uploads'));
// satart server  
app.use('/', require('./Routes/indexRoutes')); 

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}/`);

});  