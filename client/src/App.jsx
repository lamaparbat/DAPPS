import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  getAllAccounts,
  connectMetamask,
  checkLoggedInAccounts,
  getBlockNumber,
  getBalance,
  getBlock,
  getTransactions,
  getNodeInfo,
  addNewAccount,
  getAccounts,
  getAccountDetails,
  deposit,
  withdraw
} from './Services/Utils/Web3/index';
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
        onClick={getAllAccounts}
      >Check All accounts</button>
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
      <button
        className='btn btn-info text-light rounded-1'
        onClick={getTransactions}
      >Get All Transaction</button>
      <button
        className='btn btn-info text-light rounded-1'
        onClick={getNodeInfo}
      >Get Node info</button><br />
      <h1 className='text-danger'>Smart Contract Interaction [Banking Transaction]</h1><br />
      <div className='w-100 d-flex justify-content-around'>
        <button
          className='btn btn-info text-light rounded-1'
          onClick={getAccounts}
        >Get Accounts</button><br />
        <button
          className='btn btn-info text-light rounded-1'
          onClick={() => addNewAccount("parbat", 100, "ktm", "a@gmail.com")}
        >Add Account</button><br />
        <button
          className='btn btn-info text-light rounded-1'
          onClick={() => getAccountDetails()}
        >getAccountDetails</button><br />
        <button
          className='btn btn-info text-light rounded-1'
          onClick={() => deposit(20)}
        >Deposit</button><br />
        <button
          className='btn btn-info text-light rounded-1'
          onClick={() => withdraw(10)}
        >Withdraw</button><br />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App;
