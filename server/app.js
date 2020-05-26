const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send("Home sayfamız");
});

app.listen(3333);