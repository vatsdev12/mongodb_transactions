const express = require('express');
const app = express();
const controller = require('./controller/create')

app.use('/get', controller.register)

app.listen(3000, () => {
    console.log("listen on 3000 port")
});