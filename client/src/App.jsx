import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { getAllAccounts, connectMetamask, checkLoggedInAccounts, getBlockNumber, getBalance, getBlock } from './Services/Utils/Web3/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [loggedInAccount, setLoggedAccount] = useState(null);

  useEffect(() => {
    (async () => {
      let account = await checkLoggedInAccounts();
      !account ? toast.info('Please connect metamask', { toastId: '3' }) :
        setLoggedAccount(account);
    })();
  }, []);


  // account switch listener
  window.ethereum.on('accountsChanged', async () => {
    let account = await checkLoggedInAccounts();
    if (!account)
      return setLoggedAccount(null);

    setLoggedAccount(account);

    return toast.success('Account changed', { toastId: '1' });
  });

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      {/* <h2>WEB3 BLOCKCHAIN NETWORK</h2><br /> */}
      <button
        className={`btn btn-success rounded-1 w-auto ${loggedInAccount && 'disabled'}`}
        onClick={connectMetamask}
      >
        {loading ? 'Connecting....' : loggedInAccount ?
          loggedInAccount : 'Enable Ethereum Network'}
      </button>
      <button
        className='btn btn-info text-light rounded-1'
        onClick={getBalance}
      >Check Balance</button>
      <button
        className='btn btn-info text-light rounded-1'
        onClick={getBlockNumber}
      >Check Block Number</button>
      <button
        className='btn btn-info text-light rounded-1'
        onClick={getBlock}
      >Get Block</button>
      <ToastContainer />
    </div>
  )
}

export default App;
