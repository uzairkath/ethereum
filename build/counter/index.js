
const address = "0x9CeC01092A5B3b83903F816B7bFeE21C1694203F";
const abi =  [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "count",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "increment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "decrement",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const web3 = new Web3("HTTP://127.0.0.1:7545");
const counter = new web3.eth.Contract(abi, address);

document.addEventListener("DOMContentLoaded", () => {
    let accounts
    web3.eth.getAccounts().then(_accounts => {
        accounts = _accounts;
    })
    document.getElementById("get").addEventListener("click", () => {
    counter.methods.count().call()
    .then(result => {
        document.getElementById("data").innerHTML = result;
    });
    });
    document.getElementById("inc").addEventListener("click",
     () => {
         counter.methods.increment().send({from: accounts[0]}).then(receipt => {counter.methods.count().call()
         .then(result => {
             document.getElementById("data").innerHTML = result;
            console.log(receipt);
         });
        });
    });
    document.getElementById("dec").addEventListener("click",
    () => {
        counter.methods.decrement().send({from: accounts[0]}).then(receipt => {counter.methods.count().call()
            .then(result => {
                document.getElementById("data").innerHTML = result;
                console.log(receipt);
            });
           });
    });
    
});