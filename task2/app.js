//import Web3 from 'web3'

require('dotenv').config();
const Web3 = require('web3');
const MyContract = require("./build/contracts/ERC20.json");
const HDWalletProvider = require('truffle-hdwallet-provider');

const init  = async() =>{
 const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();


    const Contract = new web3.eth.Contract(
        MyContract.abi,
        MyContract.networks[networkId].address
    );
    console.log(await Contract.methods.balanceOf('0xBF54aA4fcbd6A828f55831f51E99ed54f5D65F47').call());
    console.log(await Contract.methods.totalSupply().call());
    var acc = await web3.eth.getAccounts();
   // console.log(acc); 
   const addressM = '0xBF54aA4fcbd6A828f55831f51E99ed54f5D65F47';
     
       console.log(await Contract.methods.transfer('0x75DC6ed20C8efA3952bEADf8cAd64CB2137d495a', 100).send({from: addressM }));
    //     Contract.methods.transfer('0xd758a3cC64b6d9cEf00c314E95760E0cFc60De6B', 100).send({from: addressM }).then(function(event){
    //         console.log(event);
    //    });

}
init();