const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); 

const app = express();


const corsOptions = {
    origin: 'https://portfolio-client-six-beryl.vercel.app', 
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json()); 

app.use('/send-email', sendEmail); 

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
