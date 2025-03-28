const getpage = (req,res) =>{

    res.send('Hello from server')
    
}; 
const multipath = (req, res) => {
console.log(req.body); // Log the request body to the console

}
module.exports = {getpage,multipath} 
 