
export const connectMetamask = () => {
 window.ethereum.request({ method: 'eth_requestAccounts' })
}