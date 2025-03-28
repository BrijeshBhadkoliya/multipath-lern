const epxress = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = epxress();
const port = process.env.PORT || 5000;

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
// satart server 
app.use('/', require('./Routes/indexRoutes')); 

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}/`);

});