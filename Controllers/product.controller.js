const Product = require('../Models/product.models')

const get = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({products});
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const getById = async(req,res)=>{
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({product});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const post = async (req, res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const put = async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message:'no object found'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const del = async(req,res)=>{
    try {
        const{ id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message:'no object found'});
        }
        res.status(200).json({message:`${id} deleted succesfully`})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    get, getById, post, put, del
}