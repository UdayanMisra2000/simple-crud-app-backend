const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./Routes/product.routes.js')

app.use(express.json()); //middleware

app.get('/', (req, res)=>{
    res.send('This is Response from Express Server');
});

app.use('/api/products', productRoutes);

mongoose.connect('mongodb+srv://udayanmisra:#password@cluster0.p0eus.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!')
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000');
    });
})
  .catch(err => console.error(err));
