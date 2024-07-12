const express= require('express')
const router=express.Router()
const calculatorController=require('../controller/calculateController')
router.post('/',calculatorController.calculate)
module.exports=router



