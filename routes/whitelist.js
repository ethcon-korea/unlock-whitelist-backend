const express = require('express');
const router = express.Router();
const { readWhitelist, addWhitelist, setWhitelist, deleteWhitelist } = require('../controller/whitelist');


router.get('/', function (req, res, next) {

  readWhitelist();

  res.send('ok');
});

router.post('/add', function (req, res, next) {
  const { name, address } = req.body;

  addWhitelist(name, address);

  res.send('ok');
});

router.put('/', function (req, res, next) {
  const { id, name, address } = req.body;

  setWhitelist(id, name, address);

  res.send('ok');
});

router.delete('/', function (req, res, next) {
  const { id } = req.body;

  deleteWhitelist(id);

  res.send('ok');
});

module.exports = router;
