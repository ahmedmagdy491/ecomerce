const router = require('express').Router();

router.get('/cart',(req,res)=>{
    res.send('cart page');
})


module.exports = router;