import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';


dotenv.config();
const app = express();

app.post("/products",async(req,res)=> { 
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image)
    {
        return res.statusCode(400).json({success : false, message: 'Please provide every field'});
    }
    
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success :true, data : newProduct});
    }
    catch(error)
    {
        console.log(`Error in Create Product ${error.message}`);
        res.status(500).json({success:false, message: "Servef Error"});
    }


});


app.listen(5100,()=>{
    connectDB();
    console.log('Server start at http://localhost:5100');
});
