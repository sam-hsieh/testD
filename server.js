const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(express.static(__dirname +"/dist"));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/sam', (req, res) => {
    res.send('Hello Sam!')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});