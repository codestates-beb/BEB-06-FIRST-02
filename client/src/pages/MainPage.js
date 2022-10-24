import React from "react";
import {useState, useEffect} from 'react';
import Web3 from 'web3';

import ThemeList from '../components/ThemeList'

import '../asset/MainPage.css'
import dummy from '../components/dummy'; // 임시로 받아오는 더미데이터

export default function MainPage() {    
    // const [punkListData, setpunkListData] = useState(dummy); //데이터를 더미서 받아옴
    // console.log(punkListData)
    const [punkListData, setpunkListData] = useState(null); //데이터를 더미서 받아옴    
    useEffect(() => {
        //여기서는 async await 을 쓸 수 없다.
        fetch("http://localhost:3001/opesea/getData")
          .then(res => {
            return res.json();
          })
          .then(data => {
            setpunkListData(data);
            // console.log("테스트1")
            // console.log(data);
          });
      }, []);
  
    return (
        <div className="mainpage">
            {/* <ThemeList punkListData={punkListData}/> */}
            {punkListData && <ThemeList punkListData={punkListData}/>}
        </div>
    );
}