
import { toast } from 'react-toastify';

// connect to blockchain network
export const checkLoggedInAccounts = async () => {
  // check if ethereum network is available on browser
  if (!window.ethereum)
    return toast.warn('Please install metamask wallet');

  return window.ethereum.selectedAddres;
}

