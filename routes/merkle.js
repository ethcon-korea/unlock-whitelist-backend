const express = require('express');
const router = express.Router();
const { generateMerkleTree, proofAddress } = require('../controller/merkle');

router.get('/', async function (req, res, next) {
    try {
        const merkle = await generateMerkleTree();

        res.json({ merkleRoot: merkle });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});

router.get('/proof', async function (req, res, next) {
    try {
        const { userWalletAddress } = req.body;
        const proof = await proofAddress(userWalletAddress);

        res.json({ merkleProof: proof });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
});

module.exports = router;