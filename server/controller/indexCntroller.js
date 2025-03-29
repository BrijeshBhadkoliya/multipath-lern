const sharp = require('sharp');
const path = require('path');
const fs = require('fs');



const getpage = (req, res) => {

    res.send('Hello from server')

};



const multipath = (req, res) => {
    console.log(req.body.imgname);
    console.log(req.file);



    const imageUrl = `http://localhost:8000/uploads/${req.file.filename}`;
    console.log(imageUrl);

    res.json({ imageUrl });


} 
module.exports = { getpage, multipath }
