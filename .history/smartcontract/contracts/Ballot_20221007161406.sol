// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.11;

contract Ballot {
    bytes[] votes;

    function addVote(bytes name) public {
        votes.push(name);
    }

    function getVote() public view returns (bytes) {
        return votes;
    }
}
