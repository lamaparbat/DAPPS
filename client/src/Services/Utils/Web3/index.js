import { web3, ACCOUNT_ADDRESS, SmartContract } from "../../constants/index";

const connectMetamask = async () => {
 return await window.ethereum.request({ method: 'eth_requestAccounts' })
}

const checkLoggedInAccounts = async () => {
 // check if ethereum network is available on browser
 if (!window.ethereum && !window.ethereum.isMetaMask)
  return toast.warn('Please install metamask wallet', { toastId: '4' });

 return window.ethereum.selectedAddress;
}


const getAllAccounts = async () => {
 // blockchain network connection
 const accounts = await web3.eth.getAccounts();
 console.log(accounts);
 return accounts;
}


const getBalance = async () => {
 let balance = await web3.eth.getBalance(ACCOUNT_ADDRESS);
 console.log(balance)
 return balance;
}

const getBlockNumber = async () => {
 const blockNumber = await web3.eth.getBlockNumber();
 console.log(blockNumber)
 return blockNumber;
}
const getBlock = async () => {
 const block = await web3.eth.getBlock(await getBlockNumber());
 // console.log(block)
 return block;
}

const getTransactions = async () => {
 const block = await getBlock();
 console.log(block.transactions)
 return transactions;
}

const getNodeInfo = async () => {
 const info = await web3.eth.getNodeInfo();
 console.log(info)
}


// Banking transaction
const addNewAccount = async (name, amount, contact_address, email) => {
 const res = await SmartContract.methods.addNewAccount(ACCOUNT_ADDRESS, name, amount, contact_address, email).send({ from: ACCOUNT_ADDRESS });
 console.log(res)
}

const getAccounts = async () => {
 const res = await SmartContract.methods.getAccounts().call();
 console.log(res)
}
const getAccountDetails = async () => {
 const res = await SmartContract.methods.getAccountDetails(ACCOUNT_ADDRESS).call();
 console.log(res)
}

const deposit = async (amnt) => {
 const res = await SmartContract.methods.deposit(ACCOUNT_ADDRESS, amnt).send({ from: ACCOUNT_ADDRESS });
 console.log(res)
}

const withdraw = async (amnt) => {
 const res = await SmartContract.methods.withdraw(ACCOUNT_ADDRESS, amnt).send({ from: ACCOUNT_ADDRESS });
 console.log(res)
}


export {
 getAllAccounts,
 connectMetamask,
 checkLoggedInAccounts,
 getBalance,
 getBlockNumber,
 getBlock,
 getTransactions,
 getNodeInfo,
 addNewAccount,
 getAccounts,
 getAccountDetails,
 deposit,
 withdraw
};