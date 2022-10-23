import Web3 from "web3";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contract";


const web3 = new Web3(Web3.givenProvider);
const ACCOUNT_ADDRESS = Web3.givenProvider.selectedAddress;
const SmartContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export {
 web3,
 ACCOUNT_ADDRESS,
 SmartContract
}