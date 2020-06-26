pragma solidity ^0.5.11;

contract getSet{
    string public data = "mydata";

    function set(string memory _data) public {
        data = _data;
    }

    function get() public view returns(string memory) {
        return data;
    }
}
