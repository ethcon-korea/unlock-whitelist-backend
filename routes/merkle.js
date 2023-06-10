const express = require('express');
const router = express.Router();
const { generateMerkleTree, checkMerkleAddress } = require('../controller/merkle');


router.get('/merkle', function (req, res, next) {
    
    const merkle = generateMerkleTree();
    console.log(merkle);

    res.send('ok');
});

router.post('/merkle/check', function (req, res, next) {
    const { userWalletAddress } = req.body;

    const proof = checkMerkleAddress(userWalletAddress);
    console.log(proof);

    res.send('ok');
});