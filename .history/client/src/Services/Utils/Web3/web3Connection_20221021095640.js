import Web3 from "web3";
import { toast } from 'react-toastify';

// connect to blockchain network
export const checkBlockchainNetworkConnection = async () => {
 // check if ethereum network is available on browser
 !window.ethereum && console.log('Please install metamask wallet');

 // blockchain network connection
 const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
 const network = await web3.eth.net.getNetworkType();
 const account = await web3.eth.getAccounts();
 if (account.length > 0)
  return account[0]
 else
  return toast.success('Please connect metamask')
}

