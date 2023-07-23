const express=require('express')
const router=express.Router()

const {getData, products}=require('../controllers/productcontrollers')

router.get('/home',getData);
router.post('/productsdata', products)

module.exports= router

