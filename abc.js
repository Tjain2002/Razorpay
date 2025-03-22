const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.send(`Your IP Address: ${ip}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
