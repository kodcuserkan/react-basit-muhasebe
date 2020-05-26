const express = require('express');
require('dotenv').config();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const url = `mongodb+srv://${username}:${password}@muhasebecluster-nta6c.mongodb.net/test?retryWrites=true&w=majority`;

const app = express();
// Middlewarelar
// app.use('/posts',()=> {
//     console.log("Middleware")
// })

// Routelar
app.get("/", (req,res) => {
    res.send("Home sayfamız");
});
app.get("/posts", (req,res) => {
    res.send("Posts sayfamız");
});

app.listen(3333);