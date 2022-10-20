import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';


import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';
import MintingPage from './pages/MintingPage';

import Header from './components/Header'


function App() {

  const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState();
    const [loaded, setLoaded] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {// window.ethereum이 있다면
            try {
                const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
                setWeb3(web);

            } catch (err) {
                console.log(err);
            }
        }
    }, []);

    const connectWallet = async () => {

        var accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
        setLoaded(true);
        await axios({
          url: 'https://testnets-api.opensea.io/api/v1/assets',
          method: 'get',
          params: {
              owner: accounts[0],
              order_direction: "desc",
              offset: "0",
              limit: "20",
              include_orders: "false"
          }
      }).then((response) => {
          console.log(response.data.assets);
          setList(response.data.assets);
          
      })
          .catch(err => console.error(err));

    };

    const disconnectWallet = async () => {

        setAccount('');
        setLoaded(false);
        setList([]);
    };

  return (<div>
    
    <BrowserRouter>
    <div>
    <Header connectWallet={connectWallet} disconnectWallet={disconnectWallet} account={account} loaded={loaded}/>
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/minting' element={<MintingPage />} />
        <Route path='/mypage' element={<MyPage loaded={loaded} account={account} disconnectWallet={disconnectWallet} connectWallet={connectWallet} list={list}/>} />
        <Route path='/detail' element={<DetailPage />} />

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
      
      {/* <Footer /> */}
    </BrowserRouter>
  </div>
    
  );
}

export default App;
