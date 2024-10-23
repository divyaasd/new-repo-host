const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');

const app = express();

// Middleware
app.use(cors(
    {
        origin: 'https://your-frontend-domain.vercel.app', // Replace with your React app's Vercel URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],         
        credentials: true                                  
      }
))
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// MongoDB Connection
mongoose.connect('mongodb+srv://divyaas340:WBLJq67LxK9UIpdj@cluster0.tfngn.mongodb.net/')

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

// Start server
