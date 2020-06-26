pragma solidity ^0.5.11;

contract Counter {
    uint256 public count;
    
    constructor () public {
        count = 100;
    }
    function increment() public {
        count++;
    }
    function decrement() public {
        count--;
    }
}