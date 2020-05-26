const express = require('express');
const router = express.Router();
const TxModel = require('../models/Post');

router.get("/", (req, res) => {
    res.send("Posts sayfamız");
});

router.post('/', (req,res) => {
    const tx = new TxModel({
        id: req.body.id,
        text: req.body.text,
        amount: req.body.amount
    });

    tx.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({ message: err })
    });
});

router.get("/other", (req, res) => {
    res.send("other post sayfamız");
});


module.exports = router;
