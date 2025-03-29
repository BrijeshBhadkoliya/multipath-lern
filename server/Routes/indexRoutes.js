const express = require('express'); 
const { getpage, multipath } = require('../controller/indexCntroller');
const router = express.Router(); 
const upload= require('../middleware/imges');
 
router.get('/', getpage);
router.post('/multipath', upload.single('images'),multipath)
module.exports = router;   
         