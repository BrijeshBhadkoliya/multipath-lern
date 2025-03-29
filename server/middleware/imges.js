const multer = require('multer');
const path = require('path');
const fs = require('fs');

const folderpath = path.join(__dirname, '../uploads');

if(!fs.existsSync(folderpath)){
      fs.mkdirSync(folderpath, { recursive: true });
        console.log('Uploads folder created successfully!');
}  

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');  
    },  
    filename: (req, file, cb) => { 
        const filename = Math.floor(Math.random() * 1000000); 
        
        const extended = path.extname(file.originalname).toLowerCase();
        const allowedTypes = ['.mp4', '.jpg', '.jpeg', '.png', '.gif', '.pdf', '.docx', '.txt'];
        if (!allowedTypes.includes(extended)) {
            return cb(new Error('Invalid file type. Only .jpg, .jpeg, .png, .gif, .pdf, .docx, and .txt are allowed.'));
        }   
        cb(null, `product${filename}${extended}`);
    }
}); 
 
const upload = multer({ storage: storage });   
 
module.exports = upload;