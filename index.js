const express = required('express');

const app = express();


app.get('/', function (req, res) {
    res.send('Hello world');
});


app.listen(3000);

