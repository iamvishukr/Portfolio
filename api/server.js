// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); // Import the sendEmail route

const app = express();

// Use middlewares
const corsOptions = {
    origin: 'https://vishalkumarport.vercel.app/', // Replace with your actual frontend URL
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(cors(corsOptions)); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Define your routes
app.use('/send-email', sendEmail); // Use the sendEmail route

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
