import Web3 from "web3";

const Provider = Web3.givenProvider;

const getAllAccounts = async () => {
 // blockchain network connection
 const web3 = new Web3(Provider || 'http://localhost:8545');
 const accounts = await web3.eth.getAccounts();
 console.log(accounts);
 return accounts;
}


const getBalance = async () => {
 let balance = await new Web3(Provider).eth.getBalance(Provider.selectedAddress);
 console.log(balance)
 return balance;
}

const getBlockNumber = async () => {
 const blockNumber = await new Web3(Provider).eth.getBlockNumber();
 console.log(blockNumber)
 return blockNumber;
}
const getBlock = async () => {
 const block = await new Web3(Provider).eth.getBlock(await getBlockNumber());
 console.log(block)
 return blockNumber;
}
// connect to metamask wallet network
const connectMetamask = async () => {
 return await window.ethereum.request({ method: 'eth_requestAccounts' })
}

// connect to blockchain network
const checkLoggedInAccounts = async () => {
 // check if ethereum network is available on browser
 if (!window.ethereum && !window.ethereum.isMetaMask)
  return toast.warn('Please install metamask wallet', { toastId: '4' });

 return window.ethereum.selectedAddress;
}


export { getAllAccounts, connectMetamask, checkLoggedInAccounts, getBalance, getBlockNumber, getBlock };