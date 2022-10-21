// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.11;

contract Ballot {
    bytes voter;

    function addVote(bytes memory name) public {
        voter = name;
    }

    function getVote() public view returns (bytes memory) {
        return voter;
    }
}