// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connection
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
