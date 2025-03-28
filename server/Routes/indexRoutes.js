const express = require('express'); 
const { getpage, multipath } = require('../controller/indexCntroller');
const router = express.Router(); 

router.get('/', getpage);
router.post('/multipath',multipath)
module.exports = router;   
