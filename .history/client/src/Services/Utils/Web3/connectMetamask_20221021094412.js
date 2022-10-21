
export const connectMetamask = async () => {
 return await window.ethereum.request({ method: 'eth_requestAccounts' })
}