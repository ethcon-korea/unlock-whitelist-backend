const web3 = require('web3');
const { MerkleTree } = require('merkletreejs');
const { uuidV4 } = require('ethers');
const users = require('../models').users;
const merkles = require('../models').merkles;

async function generateMerkleTree() {

  const whitelist = await users.findAll()
    .then((users) => {
      console.log(users)
    });

  const keccak256 = web3.utils.keccak256;
  let leaves = whitelist.map((addr) => web3.utils.keccak256(addr))
  const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
  const merkleRootHash = merkleTree.getHexRoot()

  await merkles.create({
    id: uuidV4(),
    merkle_tree: merkleTree,
    merkle_root_hash: merkleRootHash
  })
    .then(() => {
      console.log("Merkle created");
    })
    .catch(error => console.error(error));

  return merkleRootHash;
}

async function proofAddress(userWalletAddress) {

  const merkleTree = await merkles.findOne({
    order: [
      ['created_at', 'DESC']
    ],
    attributes: ['merkle_tree']
  });

  let proof = []

  if (whitelist.includes(userWalletAddress)) {
    let hashedAddress = keccak256(userWalletAddress)
    proof = merkleTree.getHexProof(hashedAddress)
  }

  return proof;
}

module.exports = { generateMerkleTree, proofAddress };
