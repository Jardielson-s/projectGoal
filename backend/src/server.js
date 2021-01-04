const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


app.listen(8081);

module.exports = app;