// index.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes'); // Import routes
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/auth', authRoutes); // Mount routes on /api/auth

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
