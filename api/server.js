const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail');

const app = express();

// Set up CORS to allow requests from your frontend URL
const corsOptions = {
    origin: 'https://vishalkumarport.vercel.app', // Your Vercel domain
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Use the /api prefix to match your deployment needs
app.use('/api/sendEmail', sendEmail);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
