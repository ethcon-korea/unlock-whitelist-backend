const web3 = require('web3');
const { MerkleTree } = require('merkletreejs');
const users = require('../models').users;

async function generateMerkleTree() {

  const whitelist = await users.findAll()
    .then((users) => {
      console.log(users)
    });

  const keccak256 = web3.utils.keccak256;
  let leaves = whitelist.map((addr) => web3.utils.keccak256(addr))
  const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
  const merkleRootHash = merkleTree.getHexRoot()

  return merkleRootHash;
}

async function checkMerkleAddress(userWalletAddress) {

  const whitelist = await users.findAll()
    .then((users) => {
      console.log(users)
    });

  let proof = []

  if (whitelist.includes(userWalletAddress)) {
    
    const keccak256 = web3.utils.keccak256;
    let leaves = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    
    let hashedAddress = keccak256(userWalletAddress)
    proof = merkleTree.getHexProof(hashedAddress)
  }

  return proof;
}

module.exports = { generateMerkleTree, checkMerkleAddress };
