var address = "0x44c64a6287560a3D5E7B4825a173Dca789552446"
let web3;
let advance;
var abi = [
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ids",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "get",
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
      "constant": true,
      "inputs": [],
      "name": "getAll",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
  const initWeb3 = () => {
    return new Promise((resolve, reject) => {
      if(typeof window.ethereum !== "undefined"){
        const web3 = new Web3(window.ethereum);
        window.ethereum.enable()
        .then(() => {
          resolve(
            new Web3(window.ethereum)
          );
        })
        .catch(e => {
          reject(e);
        });
        return;
      }
      if(typeof window.web3 !== "undefined") {
        return resolve (
          new Web3(window.web3.currentProvider)
        );
      }
      resolve(new Web3("HTTP://127.0.0.1:7545"));
      console.log(resolve);
      console.log(reject);
    });
  }
  const initContract = () => {
   return new web3.eth.Contract(abi, address);
   console.log(advance);
  }
  const initApp = () => {
    console.log("I am first");
    let accounts;
    web3.eth.getAccounts().then(_accounts => {
    accounts = _accounts
    console.log(accounts);
    const $add = document.getElementById("submit");
    $add.addEventListener('click', e => {
        e.preventDefault();
        console.log(e);
        const $data = e.target.form[0].value;
        console.log($data);
        advance.methods.add($data).send({from: accounts[0]})
        .then(console.log);
      });
      const $getIt = document.getElementById("getIt");
      $getIt.addEventListener('click', e => {
        e.preventDefault();
        const id = e.target.form[2].value;
        console.log(id);
        advance.methods.get(id).call()
        .then(result => {
          console.log(result);
          document.getElementById("data").innerHTML = result;
        });
  });
          const $getAll = document.getElementById("getAll");
          $getAll.addEventListener("click", e => {
            e.preventDefault();
            advance.methods.getAll().call()
            .then(result  => {
              console.log(result);
              document.getElementById("allData").innerHTML = result;
            })
        })
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    initWeb3()
    .then(_web3 => {
      web3 = _web3;
    advance = initContract();
    initApp();
    })
    .catch(e =>{
      console.log(e);
    });
});
