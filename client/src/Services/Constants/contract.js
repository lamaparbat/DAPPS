const CONTRACT_ADDRESS = "0x5F9D3e2809Eb1cE1F82287F3Be1D6B1Ab54e4Df4";
const CONTRACT_ABI = [
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "accountAddressess",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "name": "accounts",
  "outputs": [
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "contact_address",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "email",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "accountAddress",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "contact_address",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "email",
    "type": "string"
   }
  ],
  "name": "addNewAccount",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "accountAddress",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "accountAddress",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "deposit",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getAccounts",
  "outputs": [
   {
    "internalType": "address[]",
    "name": "",
    "type": "address[]"
   }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "accountAddress",
    "type": "address"
   }
  ],
  "name": "getAccountDetails",
  "outputs": [
   {
    "components": [
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "contact_address",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "email",
      "type": "string"
     }
    ],
    "internalType": "struct Accounts.AccountInfo",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
 }
]

export {
 CONTRACT_ADDRESS,
 CONTRACT_ABI
}

