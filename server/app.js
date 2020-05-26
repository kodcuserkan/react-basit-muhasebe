const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoute = require('./routes/posts')

require('dotenv').config();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const url = `mongodb+srv://${username}:${password}@muhasebecluster-nta6c.mongodb.net/test?retryWrites=true&w=majority`;



const app = express();
// Middlewarelar

app.use(bodyParser.json());


// import route as a middleware
app.use('/posts', postRoute);

// Home route
app.get("/", (req, res) => {
    res.send("Home sayfamız");
});

// Connect to mongoDB
mongoose
.connect(url, {
useUnifiedTopology: true,
useNewUrlParser: true,
}, () => console.log("Connection success!"));


app.listen(3333);