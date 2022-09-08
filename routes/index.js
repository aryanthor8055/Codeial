const express=require('express')

const router=express.Router();
const homeContoller=require('../controllers/home_controller')
console.log('Router loaded');

router.get('/',homeContoller.home)
router.use('/users',require('./users'))

router.use("/users",require('./posts'))

//for any further routes,access from here

// router.uss(''routerName,require('./routerfile'))

module.exports=router;

