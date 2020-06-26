var abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "data",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_data",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
  var address = "0x270483E0317f37bB64Ac5085B58E5094ed1eCc41";
  var web3 = new Web3("HTTP://127.0.0.1:7545");


  var getSet = new web3.eth.Contract(abi, address);

  document.addEventListener("DOMContentLoaded", ()=> {
     const hello = () => getSet.methods.get().call().then(result => {
          document.getElementById("data").innerHTML = result;
      });
      hello();
  var account;
  web3.eth.getAccounts().then(_account => {
      account = _account;
  });

  var $form = document.getElementById("form");

  $form.addEventListener("submit", e => {
     e.preventDefault();
    const data = e.target.elements[0].value;
    getSet.methods.set(data).send({from: account[0]})
    .then(hello());
  });
});