const express = require('express');
const router = express.Router();
const { readWhitelist, addWhitelist, setWhitelist, deleteWhitelist } = require('../controller/whitelist');


router.get('/', async function (req, res) {
  try {
      const whitelist = await readWhitelist();

      res.json({ whitelist });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.toString() });
  }
});

router.post('/add', async function (req, res) {
  const { name, address } = req.body;
  try {
      const newUser = await addWhitelist(name, address);

      res.json({ user: newUser });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.toString() });
  }
});

router.put('/', async function (req, res) {
  const { id, name, address } = req.body;
  try {
      const updatedUser = await setWhitelist(id, name, address);

      res.json({ user: updatedUser });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.toString() });
  }
});

router.delete('/', async function (req, res) {
  const { id } = req.body;
  try {
      const deletedUser = await deleteWhitelist(id);

      res.json({ message: "User deleted successfully" });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
