const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('hello')
});


app.listen(port, () => console.log(`your app is running on port ${port}`));