const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/ping', function(req, res){
    res.send('Ping received');
});

const port = process.env.PORT || 3010;
app.listen(port);
console.log('Simple api started on port ' + port);
