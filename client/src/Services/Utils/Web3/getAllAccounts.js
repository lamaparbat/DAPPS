import Web3 from "web3";

export const getAllAccounts = async () => {
 // blockchain network connection
 const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
 const accounts = await web3.eth.getAccounts();

 return accounts;
}