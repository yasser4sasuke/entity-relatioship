const express = require('express');
const app = express();
const PostModel = require ('./model/users');
require('./model/db_config');


app.listen(8080, (req, res) => {
    console.log(`server starting`);
});
