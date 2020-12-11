const router = require('express').Router();



router.get('/user/signin',(req,res)=>{
    res.send('Signin page');
})

router.get('/user/register',(req,res)=>{
    res.send('Register page');
})

module.exports = router;
