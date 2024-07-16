const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Init middleware
app.use(express.json());
app.use(cors());

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
