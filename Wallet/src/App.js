import React,{useState} from 'react';
import './App.css';
import AllWallets from './component/AllWallets';
import NewWallet from './component/NewWallet';
import CheckBalance from './component/CheckBalance';
import AddFunds from './component/AddFunds';
import SpendFunds from './component/SpendFunds';
import AllTransactions from './component/AllTransactions';


function App() {
  const [allWalletsClicked,setAllWalletsClicked] = useState(false);
  const [newWalletClicked,setNewWalletClicked] = useState(false);
  const [checkBalanceClicked,setCheckBalanceClicked] = useState(false);
  const [addFundsClicked,setAddFundsClicked] = useState(false);
  const [spendFundsClicked,setSpendFundsClicked] = useState(false);
  const [allTransClicked,setAllTransClicked] = useState(false);

  const settingAllWalletsClicked = () => {
    setAllWalletsClicked(!allWalletsClicked);
    if(newWalletClicked)
      setNewWalletClicked(!newWalletClicked);
    if(checkBalanceClicked)
      setCheckBalanceClicked(!checkBalanceClicked);
    if(addFundsClicked)
      setAddFundsClicked(!addFundsClicked);
    if(spendFundsClicked)
      setSpendFundsClicked(!spendFundsClicked);
    if(allTransClicked)
      setAllTransClicked(!allTransClicked);
  }
  const settingNewWalletsClicked = () => {
    setNewWalletClicked(!newWalletClicked);
    if(allWalletsClicked)
      setAllWalletsClicked(!allWalletsClicked);
    if(checkBalanceClicked)
      setCheckBalanceClicked(!checkBalanceClicked);
    if(addFundsClicked)
      setAddFundsClicked(!addFundsClicked);
    if(spendFundsClicked)
      setSpendFundsClicked(!spendFundsClicked);
    if(allTransClicked)
      setAllTransClicked(!allTransClicked);
  }
  const settingCheckBalanceClicked = () => {
    setCheckBalanceClicked(!checkBalanceClicked);
    if(allWalletsClicked)
      setAllWalletsClicked(!allWalletsClicked);
    if(newWalletClicked)
      setNewWalletClicked(!newWalletClicked);
    if(addFundsClicked)
      setAddFundsClicked(!addFundsClicked);
    if(spendFundsClicked)
      setSpendFundsClicked(!spendFundsClicked);
    if(allTransClicked)
      setAllTransClicked(!allTransClicked);
  }
  const settingAddFundsClicked = () =>{
    setAddFundsClicked(!addFundsClicked);
    if(allWalletsClicked)
      setAllWalletsClicked(!allWalletsClicked);
    if(newWalletClicked)
      setNewWalletClicked(!newWalletClicked);
    if(checkBalanceClicked)
      setCheckBalanceClicked(!checkBalanceClicked);
    if(spendFundsClicked)
      setSpendFundsClicked(!spendFundsClicked);
    if(allTransClicked)
      setAllTransClicked(!allTransClicked);
  }
  const settingSpendFundsClicked = () => {
    setSpendFundsClicked(!spendFundsClicked);
    if(allWalletsClicked)
      setAllWalletsClicked(!allWalletsClicked);
    if(checkBalanceClicked)
      setCheckBalanceClicked(!checkBalanceClicked);
    if(addFundsClicked)
      setAddFundsClicked(!addFundsClicked);
    if(allTransClicked)
      setAllTransClicked(!allTransClicked);
    if(newWalletClicked)
      setNewWalletClicked(!newWalletClicked);
  }
  const settingAllTransClicked = () => {
    setAllTransClicked(!allTransClicked);
    if(allWalletsClicked)
      setAllWalletsClicked(!allWalletsClicked);
    if(checkBalanceClicked)
      setCheckBalanceClicked(!checkBalanceClicked);
    if(addFundsClicked)
      setAddFundsClicked(!addFundsClicked);
    if(spendFundsClicked)
      setSpendFundsClicked(!spendFundsClicked);
    if(newWalletClicked)
      setNewWalletClicked(!newWalletClicked);
  }


  return (
    <>
    <div className="App">
      <h3 className="heading">Personal Wallet UI</h3>
      <div className="options">
        <h6 onClick={settingAllWalletsClicked} className={allWalletsClicked ? 'btn-clicked': null}>All Wallets</h6>
        <h6 onClick={settingNewWalletsClicked} className={newWalletClicked ? 'btn-clicked': null}>New Wallet</h6>
        <h6 onClick={settingCheckBalanceClicked} className={checkBalanceClicked ? 'btn-clicked': null}>Check Balance</h6>
        <h6 onClick={settingAddFundsClicked} className={addFundsClicked ? 'btn-clicked': null}>Add Funds</h6>
        <h6 onClick={settingSpendFundsClicked} className={spendFundsClicked ? 'btn-clicked': null}>Spend Funds</h6>
        <h6 onClick={settingAllTransClicked} className={allTransClicked ? 'btn-clicked': null}>All Transactions</h6>
      </div>
    </div>
    {allWalletsClicked ? <AllWallets/> : null}
    {newWalletClicked ? <NewWallet/> : null}
    {checkBalanceClicked ? <CheckBalance/> : null}
    {addFundsClicked ? <AddFunds/> : null}
    {spendFundsClicked ? <SpendFunds/> : null}
    {allTransClicked ? <AllTransactions/> : null}
    </>
  );
}

export default App;
