// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.11;

contract Ballot {
    string[] votes;

    function addVote(uint256 name) public {
        votes.push(name);
    }

    function getVote() public view returns (string) {
        return votes;
    }
}
