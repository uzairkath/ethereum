var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
var address = "0x5c0B1AA35604990E5d2F67e54702200a01A2F2aC";
var web3 = new Web3("HTTP://127.0.0.1:7545");

var helloWorld = new web3.eth.Contract(abi, address);

document.addEventListener("DOMContentLoaded", () => {
helloWorld.methods.hello().call()
.then(result => {
    document.getElementById("hello").innerHTML = result;
    });
});
