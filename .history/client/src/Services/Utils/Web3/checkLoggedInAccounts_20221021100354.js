import Web3 from "web3";
import { toast } from 'react-toastify';

// connect to blockchain network
export const checkLoggedInAccounts = async () => {
  // check if ethereum network is available on browser
  !window.ethereum && toast.warn('Please install metamask wallet');

  // blockchain network connection
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  const account = await web3.eth.getAccounts();
  if (account.length > 0)
    return await account[0]
  else
    return toast.success('Please connect metamask')
}

