const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); 

const app = express();


// const corsOptions = {
//     origin: 'https://vishalkumarport.vercel.app', 
//     optionsSuccessStatus: 200,
// };
app.use(cors("*"));
app.use(bodyParser.json()); 

app.use('/send-email', sendEmail); 

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
