// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract Accounts {
    struct AccountInfo {
        string name;
        uint256 amount;
        string contact_address;
        string email;
    }

    mapping(address => AccountInfo) public accounts;
    address[] public accountAddressess;

    function addNewAccount(
        address accountAddress,
        string memory name,
        uint256 amount,
        string memory contact_address,
        string memory email
    ) public {
        accounts[accountAddress] = AccountInfo(
            name,
            amount,
            contact_address,
            email
        );
        accountAddressess.push(accountAddress);
    }

    function withdraw(address accountAddress, uint256 amount) public {
        accounts[accountAddress].amount -= amount;
    }

    function deposit(address accountAddress, uint256 amount) public {
        accounts[accountAddress].amount += amount;
    }

    function getAccounts() public view returns (address[] memory) {
        return accountAddressess;
    }

    function getAccountDetails(address accountAddress)
        public
        view
        returns (AccountInfo memory)
    {
        return accounts[accountAddress];
    }
}
