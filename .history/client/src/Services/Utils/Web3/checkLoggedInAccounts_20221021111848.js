
import { toast } from 'react-toastify';

// connect to blockchain network
export const checkLoggedInAccounts = async () => {
  // check if ethereum network is available on browser
  if (!window.ethereum)
    return toast.warn('Please install metamask wallet');

  if (window.ethereum.selectedAddres)
    return window.ethereum.selectedAddres;
  else
    return toast.success('Please connect metamask')
}

