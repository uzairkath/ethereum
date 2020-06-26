pragma solidity ^0.5.11;

contract advancedSmartContract{
    uint256[] public ids;
    function add(uint256 id) public {
        ids.push(id);
    }
    function get(uint256 id) public view returns(uint256) {
       return ids[id];
    }
    function getAll() view public returns(uint256[] memory) {
        return ids;
    }
}