import { useEffect, useState } from 'react';
import { connectBlockchainNetwork } from './Services/Utils/Web3/web3Connection';
import { connectMetamask } from '../src/Services/Utils/Web3/connectMetamask';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    connectBlockchainNetwork();
  }, []);

  const startMetamaskConnection = async () => {
    setLoading(true);
    const result = await connectMetamask();
    console.log('con', result)
  }

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h2>WEB3 BLOCKCHAIN NETWORK</h2><br />
      <button
        className='btn btn-info text-dark rounded-1 w-25'
        onClick={startMetamaskConnection}
      >{loading ? 'Connected' : 'Enable Ethereum Network'}</button>
    </div>
  )
}

export default App;
