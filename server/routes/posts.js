const express = require('express');
const router = express.Router();
const TxModel = require('../models/Post');

// Tüm transferleri getir
router.get("/", async (req, res) => {
    try {
        const TXs = await TxModel.find();
        res.json(TXs);
        // console.log(TXs);
    } catch (error) {
        res.json({
            message: "Hata: " +error
        });
    }
});

// Bir transfer oluştur
router.post('/', async (req, res) => {
    const tx = new TxModel({
        id: req.body.id,
        text: req.body.text,
        amount: req.body.amount
    });

    try {
        const data = await tx.save();
        res.json(data);
    } catch (error) {
        res.json({ message: "Hata: " +error });
    }
});

// Bir transferi getir
router.get('/:txid', async (req, res) => {
    //console.log(req.params.txid);
    try {
        const data = await TxModel.findById(req.params.txid);
        res.json({ data });
    } catch (error) {
        res.json({
            message: error
        })
    }
});

// Bir transferi sil
router.delete('/:txid', async (req, res) => {
    try {
        const deletetdTX = await TxModel.deleteOne({ _id: req.params.txid});
        res.json(deletetdTX);
    } catch (error) {
        res.json({ message:"Hata: " + error })
    }
});

// Bir transferi güncelle
router.patch('/:txid', async (req, res) => {
    try {
        const updatedTx = await TxModel.updateOne(
            {_id: req.params.txid },
            { $set: { 
                id: req.body.id,
                text: req.body.text,
                amount: req.body.amount
            } }
        );
        res.json(updatedTx);
    } catch (error) {
        res.json({ message: "Hata: " + error });
    }
});

module.exports = router;
