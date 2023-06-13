const express = require('express');
const router = express.Router();
const { readWhitelist, addWhitelist, setWhitelist, deleteWhitelist } = require('../controller/whitelist');


router.get('/', async function (req, res, next) {

  readWhitelist();

  res.send('ok');
});

router.post('/add', async function (req, res, next) {
  const { name, address } = req.body;

  addWhitelist(name, address);

  res.send('ok');
});

router.put('/', async function (req, res, next) {
  const { id, name, address } = req.body;

  setWhitelist(id, name, address);

  res.send('ok');
});

router.delete('/', async function (req, res, next) {
  const { id } = req.body;

  deleteWhitelist(id);

  res.send('ok');
});

module.exports = router;
